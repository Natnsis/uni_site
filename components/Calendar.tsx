'use client'
import { Button } from "@/components/ui/button";
import { Moon, Salad, Sun, SunMoon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Calendar() {
  const foods = [
    // Breakfast: 6:00 AM - 11:50 AM
    { id: 1, name: 'Pancakes', time: 'morning', createdAt: '06:00 AM' },
    { id: 2, name: 'Oatmeal', time: 'morning', createdAt: '07:00 AM' },
    { id: 3, name: 'Eggs Benedict', time: 'morning', createdAt: '08:00 AM' },
    { id: 4, name: 'French Toast', time: 'morning', createdAt: '09:00 AM' },
    { id: 5, name: 'Breakfast Burrito', time: 'morning', createdAt: '10:00 AM' },
    { id: 6, name: 'Greek Yogurt', time: 'morning', createdAt: '11:00 AM' },
    { id: 7, name: 'Shakshuka', time: 'morning', createdAt: '11:50 AM' },

    // Lunch: 12:00 PM - 5:00 PM
    { id: 8, name: 'Chicken Salad', time: 'afternoon', createdAt: '12:00 PM' },
    { id: 9, name: 'Beef Burger', time: 'afternoon', createdAt: '01:00 PM' },
    { id: 10, name: 'Club Sandwich', time: 'afternoon', createdAt: '02:00 PM' },
    { id: 11, name: 'Margherita Pizza', time: 'afternoon', createdAt: '03:00 PM' },
    { id: 12, name: 'Quinoa Bowl', time: 'afternoon', createdAt: '03:45 PM' },
    { id: 13, name: 'Fish Tacos', time: 'afternoon', createdAt: '04:30 PM' },
    { id: 14, name: 'Caesar Wrap', time: 'afternoon', createdAt: '05:00 PM' },

    // Dinner: 6:00 PM - 11:00 PM
    { id: 15, name: 'Grilled Salmon', time: 'evening', createdAt: '06:00 PM' },
    { id: 16, name: 'Steak Frites', time: 'evening', createdAt: '07:00 PM' },
    { id: 17, name: 'Chicken Alfredo', time: 'evening', createdAt: '08:00 PM' },
    { id: 18, name: 'Sushi Platter', time: 'evening', createdAt: '09:00 PM' },
    { id: 19, name: 'Lamb Chops', time: 'evening', createdAt: '10:00 PM' },
    { id: 20, name: 'Vegetable Curry', time: 'evening', createdAt: '10:30 PM' },
    { id: 21, name: 'Beef Stir Fry', time: 'evening', createdAt: '11:00 PM' }
  ];

  const days = [
    { id: 1, day: 'moday' },
    { id: 2, day: 'tuesday' },
    { id: 3, day: 'wednsday' },
    { id: 4, day: 'thursday' },
    { id: 5, day: 'friday' },
    { id: 6, day: 'saturday' },
    { id: 7, day: 'sunday' },
  ]
  return (
    <div className="h-[60vh] mt-5">
      <div className="grid grid-cols-7">
        {days.map((d, index) => (
          <p className="capitalize pl-2" key={index}>{d.day}</p>
        ))}
      </div>
      <div className="h-full grid grid-cols-7 grid-rows-3">
        {foods.map((f) => (
          <Dialog key={f.id}>
            <DialogTrigger asChild>
              <div className="border border-gray-100 p-3 hover:bg-gray-50 flex flex-col cursor-pointer">
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
                        {/* Button stays here, but asChild on Trigger prevents DOM nesting issues */}
                        <Button variant="secondary" className="w-full">
                          <Salad className="mr-2 h-4 w-4" /> {f.name}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Quick preview of {f.name} (ID: {f.id})
                      </HoverCardContent>
                    </HoverCard>
                    <p className="text-xs text-end text-muted-foreground">{f.createdAt}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Food Details</DialogTitle>
                {/* FIXED: added asChild to prevent <p> nesting a <div> */}
                <DialogDescription asChild>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">ID:</strong> {f.id}</p>
                    <p><strong className="text-foreground">Food Name:</strong> {f.name}</p>
                    <p><strong className="text-foreground">Scheduled Time:</strong> {f.time} ({f.createdAt})</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

