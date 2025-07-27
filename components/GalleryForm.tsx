"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { uploadToGallery } from "@/actions/gallery.action";

const GalleryForm = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!caption || !file) return alert("Both caption and image required.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset");
    formData.append("folder", "gallery");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dp1o87p4c/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const cloudinaryData = await res.json();

    if (!cloudinaryData.secure_url) {
      setLoading(false);
      return alert("Cloudinary upload failed.");
    }

    const dbResponse = await uploadToGallery(
      caption,
      cloudinaryData.secure_url
    );

    setLoading(false);

    if (dbResponse.success) {
      alert("Image uploaded and saved!");
      setCaption("");
      setFile(null);
    } else {
      alert("Saved to Cloudinary, but DB failed.");
    }
  };

  return (
    <Card className="px-10 py-6">
      <h1 className="text-center font-bold text-xl mb-4">
        Gallery Insertion Form
      </h1>

      <div className="grid w-full gap-3 mb-4">
        <Label htmlFor="message">Add Caption</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div className="flex gap-5">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <div className="flex items-end">
          <Button onClick={handleUpload} disabled={loading}>
            {loading ? "Posting..." : "Post"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GalleryForm;
