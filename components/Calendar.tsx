'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Pencil, Salad, Sun, SunMoon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react";

export default function Calendar() {

  const [foods, setFoods] = useState([
    // 🌅 Morning — 6:00 AM to 11:50 AM
    {
      id: 1,
      name: "Pancakes",
      time: "morning",
      createdAt: "06:00 AM",
      description: "Fluffy buttermilk pancakes served with maple syrup and fresh berries.",
    },
    {
      id: 2,
      name: "Oatmeal",
      time: "morning",
      createdAt: "07:00 AM",
      description: "Warm steel-cut oats topped with honey, walnuts, and sliced bananas.",
    },
    {
      id: 3,
      name: "Eggs Benedict",
      time: "morning",
      createdAt: "08:00 AM",
      description: "Poached eggs and Canadian bacon on English muffins with hollandaise sauce.",
    },
    {
      id: 4,
      name: "French Toast",
      time: "morning",
      createdAt: "09:00 AM",
      description: "Thick-sliced brioche soaked in cinnamon custard and griddled golden brown.",
    },
    {
      id: 5,
      name: "Breakfast Burrito",
      time: "morning",
      createdAt: "10:00 AM",
      description: "Scrambled eggs, black beans, avocado, and cheese wrapped in a flour tortilla.",
    },
    {
      id: 6,
      name: "Greek Yogurt",
      time: "morning",
      createdAt: "11:00 AM",
      description: "Creamy Greek yogurt layered with house-made granola and wildflower honey.",
    },
    {
      id: 7,
      name: "Shakshuka",
      time: "morning",
      createdAt: "11:50 AM",
      description: "Eggs poached in a spiced tomato and bell pepper sauce with feta cheese.",
    },

    // 🌤 Afternoon — 12:00 PM to 5:00 PM
    {
      id: 8,
      name: "Chicken Salad",
      time: "afternoon",
      createdAt: "12:00 PM",
      description: "Grilled chicken breast over mixed greens with cherry tomatoes and balsamic vinaigrette.",
    },
    {
      id: 9,
      name: "Beef Burger",
      time: "afternoon",
      createdAt: "01:00 PM",
      description: "Quarter-pound beef patty with cheddar, lettuce, and tomato on a brioche bun.",
    },
    {
      id: 10,
      name: "Club Sandwich",
      time: "afternoon",
      createdAt: "02:00 PM",
      description: "Triple-decker turkey, bacon, and Swiss sandwich with herb mayo.",
    },
    {
      id: 11,
      name: "Margherita Pizza",
      time: "afternoon",
      createdAt: "03:00 PM",
      description: "Thin crust pizza with fresh mozzarella, basil leaves, and San Marzano tomatoes.",
    },
    {
      id: 12,
      name: "Quinoa Bowl",
      time: "afternoon",
      createdAt: "03:45 PM",
      description: "Protein-packed quinoa with roasted sweet potatoes, kale, and tahini dressing.",
    },
    {
      id: 13,
      name: "Fish Tacos",
      time: "afternoon",
      createdAt: "04:30 PM",
      description: "Crispy white fish in corn tortillas with cabbage slaw and lime crema.",
    },
    {
      id: 14,
      name: "Caesar Wrap",
      time: "afternoon",
      createdAt: "05:00 PM",
      description: "Grilled chicken and romaine lettuce tossed in Caesar dressing in a spinach wrap.",
    },

    // 🌙 Evening — 6:00 PM to 11:00 PM
    {
      id: 15,
      name: "Grilled Salmon",
      time: "evening",
      createdAt: "06:00 PM",
      description: "Atlantic salmon fillet grilled with lemon-herb butter and served with asparagus.",
    },
    {
      id: 16,
      name: "Steak Frites",
      time: "evening",
      createdAt: "07:00 PM",
      description: "Pan-seared ribeye steak served with crispy hand-cut fries and garlic butter.",
    },
    {
      id: 17,
      name: "Chicken Alfredo",
      time: "evening",
      createdAt: "08:00 PM",
      description: "Fettuccine pasta tossed in a rich, creamy parmesan sauce with grilled chicken.",
    },
    {
      id: 18,
      name: "Sushi Platter",
      time: "evening",
      createdAt: "09:00 PM",
      description: "Chef’s selection of fresh nigiri and specialty rolls with ginger and wasabi.",
    },
    {
      id: 19,
      name: "Lamb Chops",
      time: "evening",
      createdAt: "10:00 PM",
      description: "Herb-crusted lamb chops served with mint chimichurri and roasted potatoes.",
    },
    {
      id: 20,
      name: "Vegetable Curry",
      time: "evening",
      createdAt: "10:30 PM",
      description: "Seasonal vegetables simmered in a fragrant coconut milk curry sauce.",
    },
    {
      id: 21,
      name: "Beef Stir Fry",
      time: "evening",
      createdAt: "11:00 PM",
      description: "Tender beef strips sautéed with broccoli and bell peppers in a ginger-soy glaze.",
    },
  ]);

  const [selectedFood, setSelectedFood] = useState<any>(null);

  const handleUpdate = () => {
    setFoods(prev =>
      prev.map(food =>
        food.id === selectedFood.id ? selectedFood : food
      )
    );
  };

  return (
    <div className="h-[70vh] mt-5">
      <div className="h-full grid grid-cols-7">
        {foods.map((f) => (
          <Dialog key={f.id}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedFood(f)}
                className="border border-gray-100 p-3 hover:bg-gray-50 flex flex-col cursor-pointer"
              >
                {f.time === 'morning' ? (
                  <Sun className="text-orange-500" />
                ) : f.time === 'afternoon' ? (
                  <SunMoon className="text-yellow-600" />
                ) : (
                  <Moon className="text-indigo-500" />
                )}

                <div className="flex-1 flex items-center">
                  <div className="w-full flex flex-col gap-2">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="secondary" className="w-full">
                          <Salad className="mr-2 h-4 w-4" /> {f.name}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-col gap-2">
                          <div>
                            <h1 className="font-bold text-sm">Wed, 10 Dec 2024</h1>
                            <p className="text-xs text-gray-600">at {f.createdAt}</p>
                          </div>
                          <div>
                            <div className="flex gap-2">
                              <Badge>{f.name}</Badge>
                              <Badge>{f.createdAt}</Badge>
                            </div>
                            <p className="bg-secondary p-1 mt-1 rounded-lg text-xs">{f.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <p className="text-xs text-end text-muted-foreground">
                      {f.createdAt}
                    </p>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            {/* ✨ FORM INSIDE DIALOG */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Food</DialogTitle>
              </DialogHeader>

              {selectedFood && (
                <div className="space-y-4 mt-4">

                  {/* Name */}
                  <div>
                    <label className="text-sm">Food Name</label>
                    <Input
                      value={selectedFood.name}
                      onChange={(e) =>
                        setSelectedFood({
                          ...selectedFood,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="text-sm">Meal Time</label>
                    <Select
                      value={selectedFood.time}
                      onValueChange={(value) =>
                        setSelectedFood({
                          ...selectedFood,
                          time: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Time String */}
                  <div>
                    <label className="text-sm">Scheduled Time</label>
                    <Input
                      value={selectedFood.createdAt}
                      onChange={(e) =>
                        setSelectedFood({
                          ...selectedFood,
                          createdAt: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-sm">Description</label>
                    <Textarea
                      value={selectedFood.description}
                      onChange={(e) =>
                        setSelectedFood({
                          ...selectedFood,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleUpdate}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>

                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
