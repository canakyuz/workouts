import { WorkoutProgram } from "@/types/workout";

export type ExerciseType =
  | "compound"
  | "strength"
  | "accessory"
  | "core"
  | "cardio"
  | "functional"
  | "plyometric"
  | "full-body"
  | "power"
  | "mobility"
  | "recovery"
  | "mental"
  | "prehab"
  | "flexibility"
  | "planning"
  | "hiit"
  | "endurance";

export interface Exercise {
  name: string;
  type: ExerciseType;
  sets?: number;
  reps?: string;
  rest?: string;
  duration?: string;
  distance?: string;
  rounds?: number;
  workTime?: string;
  restTime?: string;
  exercises?: string[];
  notes?: string;
}

export interface Workout {
  title: string;
  warmUp?: Exercise[];
  exercises: Exercise[];
}

export interface Phase {
  id: number;
  name: string;
  duration: string;
  description: string;
  focus: string;
  setRepScheme: {
    compound: string;
    accessory: string;
  };
}

export const phases: Phase[] = [
  {
    id: 1,
    name: "Adaptasyon",
    duration: "4 Hafta",
    description: "Vücudu yeni antrenman rejimine alıştırma",
    focus: "Doğru form ve teknik geliştirme, düşük yoğunluklu antrenmanlar",
    setRepScheme: {
      compound: "3x8-10",
      accessory: "2x12-15",
    },
  },
  {
    id: 2,
    name: "Progresif Yükleme",
    duration: "4 Hafta",
    description: "Yavaş yavaş yoğunluğu ve yükü artırma",
    focus: "Kuvvet ve dayanıklılığı artırma, orta yoğunluklu antrenmanlar",
    setRepScheme: {
      compound: "3x6-8",
      accessory: "3x10-12",
    },
  },
  {
    id: 3,
    name: "Pik Performans",
    duration: "4 Hafta",
    description: "Maksimum performans ve dayanıklılık geliştirme",
    focus: "Güç ve kondisyonu optimize etme, yüksek yoğunluklu antrenmanlar",
    setRepScheme: {
      compound: "4x5-6",
      accessory: "3x8-10",
    },
  },
  {
    id: 4,
    name: "Cehennem Haftası",
    duration: "10 Gün",
    description: "Maksimum fiziksel ve zihinsel dayanıklılık testi",
    focus: "Tüm limitleri zorlama ve mental dayanıklılığı geliştirme",
    setRepScheme: {
      compound: "Değişken",
      accessory: "Değişken",
    },
  },
  {
    id: 5,
    name: "Toparlanma",
    duration: "4 Gün",
    description: "Cehennem Haftası sonrası toparlanma ve rejenerasyon",
    focus: "Aktif dinlenme ve mental yenilenme",
    setRepScheme: {
      compound: "Yok",
      accessory: "Yok",
    },
  },
  {
    id: 6,
    name: "Final Değerlendirme",
    duration: "3 Gün",
    description: "Kazanılan becerileri ve dayanıklılığı ölçme",
    focus: "Performans testleri ve değerlendirmeler",
    setRepScheme: {
      compound: "Test",
      accessory: "Test",
    },
  },
];

const workouts: Record<number, Workout> = {
  1: {
    title: "Push (Üst Vücut)",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Ski Erg", type: "cardio", duration: "1 dakika" },
          { name: "Sled Push", type: "functional", distance: "20 metre" },
        ],
      },
      {
        name: "Dinamik Germe",
        type: "mobility",
        duration: "5 dakika",
        exercises: [
          "Arm Circles",
          "Shoulder Rolls",
          "Chest Openers",
          "Torso Twists",
        ],
      },
      {
        name: "Rotator Cuff Isınması",
        type: "prehab",
        reps: "10-15 her hareket",
      },
    ],
    exercises: [
      { name: "Bench Press", type: "compound", sets: 4, reps: "6-8" },
      {
        name: "Seated Dumbbell Shoulder Press",
        type: "compound",
        sets: 3,
        reps: "8-10",
      },
      {
        name: "Incline Dumbbell Flyes",
        type: "accessory",
        sets: 3,
        reps: "10-12",
      },
      {
        name: "Cable Lateral Raises",
        type: "accessory",
        sets: 3,
        reps: "12-15",
      },
      {
        name: "Tricep Rope Pushdowns",
        type: "accessory",
        sets: 3,
        reps: "12-15",
      },
      { name: "Plank", type: "core", sets: 3, duration: "30-60 saniye" },
    ],
  },
  2: {
    title: "Pull (Üst Vücut)",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Ski Erg", type: "cardio", duration: "1 dakika" },
          { name: "Sled Pull", type: "functional", distance: "20 metre" },
        ],
      },
      {
        name: "Dinamik Germe",
        type: "mobility",
        duration: "5 dakika",
        exercises: [
          "Cat-Cow Stretch",
          "Lat Stretches",
          "Arm Swings",
          "Scapular Wall Slides",
        ],
      },
      { name: "Band Pull-Aparts", type: "prehab", reps: "15-20" },
    ],
    exercises: [
      {
        name: "Pull-Ups veya Lat Pulldowns",
        type: "compound",
        sets: 4,
        reps: "6-8",
      },
      {
        name: "Bent-Over Barbell Rows",
        type: "compound",
        sets: 3,
        reps: "8-10",
      },
      { name: "Seated Cable Rows", type: "accessory", sets: 3, reps: "10-12" },
      { name: "Face Pulls", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Hammer Curls", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Hanging Leg Raises", type: "core", sets: 3, reps: "10-15" },
    ],
  },
  3: {
    title: "Aktif Dinlenme",
    exercises: [
      { name: "Hafif Yürüyüş", type: "cardio", duration: "30-45 dakika" },
      {
        name: "Yoga veya Stretching",
        type: "mobility",
        duration: "20-30 dakika",
      },
      { name: "Foam Rolling", type: "recovery", duration: "15 dakika" },
    ],
  },
  4: {
    title: "Lower (Alt Vücut) ve Olympic Lifts",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Ski Erg", type: "cardio", duration: "1 dakika" },
          { name: "Sled Push", type: "functional", distance: "20 metre" },
        ],
      },
      {
        name: "Dinamik Germe",
        type: "mobility",
        duration: "5 dakika",
        exercises: ["Leg Swings", "Hip Circles"],
      },
      { name: "Glute Activation", type: "prehab", reps: "10-15 her hareket" },
    ],
    exercises: [
      { name: "Front Squats", type: "compound", sets: 4, reps: "6-8" },
      { name: "Romanian Deadlifts", type: "compound", sets: 3, reps: "8-10" },
      { name: "Power Cleans", type: "compound", sets: 4, reps: "5" },
      { name: "Lunge", type: "accessory", sets: 3, reps: "10-12 her bacak" },
      {
        name: "Standing Calf Raises",
        type: "accessory",
        sets: 3,
        reps: "15-20",
      },
      { name: "Sit Thru", type: "core", sets: 3, reps: "12 her taraf" },
    ],
  },
  5: {
    title: "Upper (Üst Vücut) ve Olympic Lifts",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Ski Erg", type: "cardio", duration: "1 dakika" },
          { name: "Sled Pull", type: "functional", distance: "20 metre" },
        ],
      },
      {
        name: "Dinamik Germe",
        type: "mobility",
        duration: "5 dakika",
        exercises: [
          "Arm Circles",
          "Shoulder Dislocations",
          "Torso Rotations",
          "Wrist and Elbow Mobility",
        ],
      },
      { name: "Shoulder Dislocations", type: "prehab", reps: "10-15" },
    ],
    exercises: [
      { name: "Push Press", type: "compound", sets: 4, reps: "6" },
      { name: "Weighted Pull-Ups", type: "compound", sets: 4, reps: "6-8" },
      { name: "Hang Cleans", type: "compound", sets: 4, reps: "5" },
      { name: "Incline Bench Press", type: "accessory", sets: 3, reps: "8-10" },
      { name: "Barbell Rows", type: "accessory", sets: 3, reps: "8-10" },
      { name: "Dips", type: "accessory", sets: 3, reps: "10-12" },
      { name: "Russian Twists", type: "core", sets: 3, reps: "20 toplam" },
    ],
  },
  6: {
    title: "Kondisyon ve Fonksiyonel Antrenman",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Ski Erg", type: "cardio", duration: "1 dakika" },
          { name: "Sled Push/Pull", type: "functional", distance: "20 metre" },
        ],
      },
      {
        name: "Dinamik Germe",
        type: "mobility",
        duration: "5 dakika",
        exercises: [
          "Jumping Jacks",
          "High Knees",
          "Butt Kicks",
          "Mountain Climbers",
        ],
      },
    ],
    exercises: [
      { name: "Burpee Box Jumps", type: "plyometric", sets: 4, reps: "10" },
      { name: "Battle Ropes", type: "cardio", sets: 4, duration: "30 saniye" },
      { name: "Kettlebell Swings", type: "functional", sets: 4, reps: "15" },
      {
        name: "Sled Push/Pull",
        type: "functional",
        distance: "20 metre",
        rounds: 4,
      },
      { name: "Assault Bike", type: "cardio", duration: "1 dakika", rounds: 4 },
      {
        name: "Farmer's Walks",
        type: "functional",
        distance: "40 metre",
        rounds: 3,
      },
      { name: "Medicine Ball Slams", type: "power", sets: 3, reps: "15" },
    ],
  },
  7: {
    title: "Tam Dinlenme",
    exercises: [
      { name: "Hafif Germe", type: "flexibility", duration: "15-20 dakika" },
      { name: "Meditasyon", type: "mental", duration: "10-15 dakika" },
      {
        name: "Derin Nefes Egzersizleri",
        type: "recovery",
        duration: "5-10 dakika",
      },
    ],
  },
  8: {
    title: "Push (Üst Vücut)",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jump Rope", type: "cardio", duration: "1 dakika" },
          { name: "Arm Circles", type: "mobility", reps: "10 her yöne" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Barbell Bench Press", type: "compound", sets: 4, reps: "6-8" },
      { name: "Military Press", type: "compound", sets: 3, reps: "8-10" },
      {
        name: "Incline Dumbbell Press",
        type: "accessory",
        sets: 3,
        reps: "10-12",
      },
      { name: "Lateral Raises", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Tricep Pushdowns", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Pallof Press", type: "core", sets: 3, reps: "12 her taraf" },
    ],
  },
  9: {
    title: "Pull (Üst Vücut)",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Rowing Machine", type: "cardio", duration: "1 dakika" },
          { name: "Band Pull-Aparts", type: "mobility", reps: "15" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Deadlifts", type: "compound", sets: 4, reps: "6-8" },
      { name: "Weighted Chin-Ups", type: "compound", sets: 3, reps: "6-8" },
      { name: "T-Bar Rows", type: "accessory", sets: 3, reps: "8-10" },
      { name: "Face Pulls", type: "accessory", sets: 3, reps: "12-15" },
      { name: "EZ Bar Curls", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Hanging Leg Raises", type: "core", sets: 3, reps: "12-15" },
    ],
  },
  10: {
    title: "Aktif Dinlenme",
    exercises: [
      { name: "Yüzme", type: "cardio", duration: "30-45 dakika" },
      { name: "Yoga", type: "mobility", duration: "30 dakika" },
      { name: "Foam Rolling", type: "recovery", duration: "15 dakika" },
    ],
  },
  11: {
    title: "Lower (Alt Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jump Rope", type: "cardio", duration: "1 dakika" },
          { name: "Bodyweight Squats", type: "mobility", reps: "15" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Back Squats", type: "compound", sets: 4, reps: "6-8" },
      { name: "Romanian Deadlifts", type: "compound", sets: 3, reps: "8-10" },
      {
        name: "Bulgarian Split Squats",
        type: "accessory",
        sets: 3,
        reps: "10-12 her bacak",
      },
      { name: "Leg Curls", type: "accessory", sets: 3, reps: "12-15" },
      {
        name: "Standing Calf Raises",
        type: "accessory",
        sets: 3,
        reps: "15-20",
      },
      {
        name: "Plank Variations",
        type: "core",
        sets: 3,
        duration: "30-45 saniye",
      },
    ],
  },
  12: {
    title: "Upper (Üst Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Arm Bike", type: "cardio", duration: "1 dakika" },
          { name: "Push-Ups", type: "strength", reps: "10" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Push Press", type: "compound", sets: 4, reps: "6" },
      { name: "Weighted Dips", type: "compound", sets: 3, reps: "6-8" },
      { name: "Incline Bench Press", type: "accessory", sets: 3, reps: "8-10" },
      { name: "Pull-Ups", type: "compound", sets: 3, reps: "Max" },
      {
        name: "Dumbbell Lateral Raises",
        type: "accessory",
        sets: 3,
        reps: "12-15",
      },
      {
        name: "Cable Woodchoppers",
        type: "core",
        sets: 3,
        reps: "12-15 her taraf",
      },
    ],
  },
  13: {
    title: "Kondisyon ve HIIT",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "10 dakika" },
      { name: "Hafif Koşu", type: "cardio", duration: "5 dakika" },
    ],
    exercises: [
      {
        name: "Sprint Intervals",
        type: "hiit",
        sets: 10,
        workTime: "30 saniye",
        restTime: "30 saniye",
      },
      { name: "Burpees", type: "full-body", sets: 3, reps: "15" },
      {
        name: "Mountain Climbers",
        type: "cardio",
        duration: "60 saniye",
        sets: 3,
      },
      { name: "Jump Rope", type: "cardio", duration: "2 dakika", sets: 3 },
      { name: "Kettlebell Swings", type: "functional", sets: 3, reps: "20" },
      { name: "Plank to Push-Up", type: "core", sets: 3, reps: "10" },
    ],
  },
  14: {
    title: "Tam Dinlenme",
    exercises: [
      { name: "Hafif Yürüyüş", type: "cardio", duration: "30 dakika" },
      { name: "Meditasyon", type: "mental", duration: "15 dakika" },
      { name: "Germe", type: "flexibility", duration: "15 dakika" },
    ],
  },
  15: {
    title: "Push (Üst Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jumping Jacks", type: "cardio", duration: "30 saniye" },
          { name: "Wall Slides", type: "mobility", reps: "10" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Bench Press", type: "compound", sets: 5, reps: "5" },
      { name: "Overhead Press", type: "compound", sets: 4, reps: "6-8" },
      {
        name: "Incline Dumbbell Press",
        type: "accessory",
        sets: 3,
        reps: "8-10",
      },
      { name: "Dips", type: "compound", sets: 3, reps: "Max" },
      {
        name: "Tricep Rope Extensions",
        type: "accessory",
        sets: 3,
        reps: "12-15",
      },
      { name: "Medicine Ball Slams", type: "power", sets: 3, reps: "10" },
    ],
  },
  16: {
    title: "Pull (Üst Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Rowing Machine", type: "cardio", duration: "1 dakika" },
          { name: "Band Pull-Aparts", type: "mobility", reps: "15" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Power Cleans", type: "compound", sets: 5, reps: "3" },
      { name: "Weighted Pull-Ups", type: "compound", sets: 4, reps: "6-8" },
      { name: "Pendlay Rows", type: "compound", sets: 3, reps: "8-10" },
      { name: "Face Pulls", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Hammer Curls", type: "accessory", sets: 3, reps: "10-12" },
      {
        name: "Farmer's Walks",
        type: "functional",
        distance: "40 metre",
        sets: 3,
      },
    ],
  },
  17: {
    title: "Aktif Dinlenme",
    exercises: [
      { name: "Bisiklet", type: "cardio", duration: "45 dakika" },
      { name: "Dinamik Stretching", type: "mobility", duration: "20 dakika" },
      { name: "Foam Rolling", type: "recovery", duration: "15 dakika" },
    ],
  },
  18: {
    title: "Lower (Alt Vücut) ve Patlayıcı Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jump Rope", type: "cardio", duration: "1 dakika" },
          { name: "Bodyweight Lunges", type: "mobility", reps: "10 her bacak" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Back Squats", type: "compound", sets: 5, reps: "5" },
      { name: "Depth Jumps", type: "plyometric", sets: 4, reps: "6" },
      { name: "Romanian Deadlifts", type: "compound", sets: 3, reps: "8-10" },
      {
        name: "Walking Lunges",
        type: "accessory",
        sets: 3,
        reps: "10 her bacak",
      },
      {
        name: "Leg Press Calf Raises",
        type: "accessory",
        sets: 3,
        reps: "15-20",
      },
      { name: "Dragon Flags", type: "core", sets: 3, reps: "8-10" },
    ],
  },
  19: {
    title: "Upper (Üst Vücut) ve Dayanıklılık",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Arm Circles", type: "mobility", reps: "10 her yöne" },
          { name: "Push-Ups", type: "strength", reps: "10" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      {
        name: "Circuit Training",
        type: "endurance",
        rounds: 4,
        exercises: [
          { name: "Push-Ups", reps: "15" },
          { name: "Pull-Ups", reps: "10" },
          { name: "Dips", reps: "12" },
          { name: "Inverted Rows", reps: "15" },
          { name: "Pike Push-Ups", reps: "10" },
        ],
      },
      { name: "Battle Ropes", type: "cardio", sets: 3, duration: "30 saniye" },
      {
        name: "Medicine Ball Rotational Throws",
        type: "power",
        sets: 3,
        reps: "10 her taraf",
      },
    ],
  },
  20: {
    title: "Fonksiyonel Fitness",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "10 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "5 dakika" },
    ],
    exercises: [
      {
        name: "Turkish Get-Ups",
        type: "functional",
        sets: 3,
        reps: "5 her taraf",
      },
      {
        name: "Kettlebell Snatches",
        type: "functional",
        sets: 4,
        reps: "8 her taraf",
      },
      { name: "Sandbag Cleans", type: "functional", sets: 3, reps: "10" },
      { name: "TRX Row to Push-Up", type: "compound", sets: 3, reps: "12" },
      { name: "Sled Drags", type: "functional", distance: "20 metre", sets: 4 },
      { name: "Ropes to Knees", type: "core", sets: 3, reps: "20" },
    ],
  },
  21: {
    title: "Tam Dinlenme",
    exercises: [
      { name: "Hafif Yüzme", type: "cardio", duration: "30 dakika" },
      { name: "Yin Yoga", type: "flexibility", duration: "45 dakika" },
      {
        name: "Progresif Kas Gevşetme",
        type: "recovery",
        duration: "15 dakika",
      },
    ],
  },
  22: {
    title: "Push (Üst Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jumping Jacks", type: "cardio", duration: "30 saniye" },
          { name: "Wall Slides", type: "mobility", reps: "10" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Incline Bench Press", type: "compound", sets: 5, reps: "5" },
      {
        name: "Standing Military Press",
        type: "compound",
        sets: 4,
        reps: "6-8",
      },
      { name: "Weighted Dips", type: "compound", sets: 3, reps: "8-10" },
      { name: "Cable Flyes", type: "accessory", sets: 3, reps: "12-15" },
      {
        name: "Overhead Tricep Extensions",
        type: "accessory",
        sets: 3,
        reps: "12-15",
      },
      { name: "Med Ball Push Press Throws", type: "power", sets: 3, reps: "8" },
    ],
  },
  23: {
    title: "Pull (Üst Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Arm Bike", type: "cardio", duration: "1 dakika" },
          { name: "Band Pull-Aparts", type: "mobility", reps: "15" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Deadlifts", type: "compound", sets: 5, reps: "5" },
      { name: "Weighted Chin-Ups", type: "compound", sets: 4, reps: "6-8" },
      { name: "Barbell Rows", type: "compound", sets: 3, reps: "8-10" },
      {
        name: "Single-Arm Dumbbell Rows",
        type: "accessory",
        sets: 3,
        reps: "10-12 her taraf",
      },
      { name: "Preacher Curls", type: "accessory", sets: 3, reps: "12-15" },
      {
        name: "Hanging Windshield Wipers",
        type: "core",
        sets: 3,
        reps: "10 her taraf",
      },
    ],
  },
  24: {
    title: "Aktif Dinlenme",
    exercises: [
      { name: "Doğa Yürüyüşü", type: "cardio", duration: "60 dakika" },
      { name: "Mobility Flow", type: "mobility", duration: "20 dakika" },
      { name: "Meditasyon", type: "mental", duration: "15 dakika" },
    ],
  },
  25: {
    title: "Lower (Alt Vücut) ve Güç",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Jump Rope", type: "cardio", duration: "1 dakika" },
          { name: "Bodyweight Squats", type: "mobility", reps: "15" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      { name: "Front Squats", type: "compound", sets: 5, reps: "5" },
      { name: "Hang Cleans", type: "compound", sets: 4, reps: "5" },
      { name: "Glute-Ham Raises", type: "accessory", sets: 3, reps: "8-10" },
      { name: "Leg Extensions", type: "accessory", sets: 3, reps: "12-15" },
      { name: "Jump Squats", type: "plyometric", sets: 3, reps: "10" },
      {
        name: "Weighted Planks",
        type: "core",
        sets: 3,
        duration: "45-60 saniye",
      },
    ],
  },
  26: {
    title: "Upper (Üst Vücut) ve Dayanıklılık",
    warmUp: [
      {
        name: "Isınma Döngüsü",
        type: "cardio",
        rounds: 3,
        exercises: [
          { name: "Arm Circles", type: "mobility", reps: "10 her yöne" },
          { name: "Push-Ups", type: "strength", reps: "10" },
        ],
      },
      { name: "Dinamik Germe", type: "mobility", duration: "5 dakika" },
    ],
    exercises: [
      {
        name: "EMOM for 20 minutes",
        type: "endurance",
        exercises: [
          { name: "Push-Ups", reps: "15" },
          { name: "Ring Rows", reps: "12" },
          { name: "Handstand Push-Ups or Pike Push-Ups", reps: "8" },
          { name: "Burpees", reps: "10" },
        ],
      },
      { name: "Face Pulls", type: "accessory", sets: 3, reps: "15-20" },
      { name: "Tricep Pushdowns", type: "accessory", sets: 3, reps: "15-20" },
      { name: "Dumbbell Curls", type: "accessory", sets: 3, reps: "15-20" },
    ],
  },
  27: {
    title: "Kondisyon ve Metcon",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "10 dakika" },
      { name: "Hafif Koşu", type: "cardio", duration: "5 dakika" },
    ],
    exercises: [
      { name: "500m Row", type: "cardio" },
      { name: "40 Air Squats", type: "bodyweight" },
      { name: "30 Push-Ups", type: "bodyweight" },
      { name: "20 Pull-Ups", type: "bodyweight" },
      { name: "10 Burpees", type: "full-body" },
      { name: "400m Run", type: "cardio" },
      { notes: "3 tur, her tur arasında 2 dakika dinlenme" },
    ],
  },
  28: {
    title: "Tam Dinlenme",
    exercises: [
      { name: "Restorative Yoga", type: "flexibility", duration: "60 dakika" },
      { name: "Epsom Tuz Banyosu", type: "recovery", duration: "20 dakika" },
      {
        name: "Derin Nefes Egzersizleri",
        type: "mental",
        duration: "10 dakika",
      },
    ],
  },
  // Cehennem Haftası (10 gün)
  29: {
    title: "Dayanıklılık Maratonu",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Koşu", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Burpee", type: "full-body", reps: "100 toplam" },
      { name: "Mountain Climbers", type: "cardio", duration: "10 dakika" },
      { name: "Squat Jumps", type: "plyometric", reps: "50 toplam" },
      { name: "Push-Ups", type: "strength", reps: "100 toplam" },
      { name: "Plank", type: "core", duration: "5 dakika toplam" },
      { name: "Koşu", type: "cardio", distance: "5 km" },
    ],
  },
  30: {
    title: "Ağırlık Dayanıklılığı",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      {
        name: "Deadlifts",
        type: "compound",
        sets: 10,
        reps: "10",
        notes: "Submaksimal ağırlık",
      },
      {
        name: "Bench Press",
        type: "compound",
        sets: 10,
        reps: "10",
        notes: "Submaksimal ağırlık",
      },
      {
        name: "Squats",
        type: "compound",
        sets: 10,
        reps: "10",
        notes: "Submaksimal ağırlık",
      },
      { name: "Pull-Ups", type: "compound", reps: "50 toplam" },
      { name: "Dips", type: "compound", reps: "50 toplam" },
      {
        name: "Farmer's Walks",
        type: "functional",
        distance: "100 metre",
        rounds: 5,
      },
    ],
  },
  31: {
    title: "Metabolik Kondisyon",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Jump Rope", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      {
        name: "Tabata Protokolü",
        type: "hiit",
        rounds: 8,
        workTime: "20 saniye",
        restTime: "10 saniye",
        exercises: ["Burpees", "Mountain Climbers", "Squat Jumps", "Push-Ups"],
      },
      {
        name: "Battle Ropes",
        type: "cardio",
        duration: "30 saniye",
        rest: "30 saniye",
        rounds: 10,
      },
      { name: "Box Jumps", type: "plyometric", reps: "50 toplam" },
      { name: "Kettlebell Swings", type: "functional", reps: "100 toplam" },
      { name: "Wall Balls", type: "full-body", reps: "100 toplam" },
      { name: "Rowing Machine", type: "cardio", distance: "2000 metre" },
    ],
  },
  32: {
    title: "Zihinsel Dayanıklılık",
    warmUp: [
      { name: "Meditasyon", type: "mental", duration: "20 dakika" },
      { name: "Hafif Germe", type: "mobility", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Soğuk Duş", type: "mental", duration: "5 dakika" },
      { name: "Handstand Hold", type: "strength", duration: "5 dakika toplam" },
      { name: "L-Sit Hold", type: "core", duration: "5 dakika toplam" },
      {
        name: "Ağırlıklı Yürüyüş",
        type: "endurance",
        distance: "10 km",
        notes: "20 kg sırt çantasıyla",
      },
      {
        name: "Meditasyon (aktivite sonrası)",
        type: "mental",
        duration: "20 dakika",
      },
    ],
  },
  33: {
    title: "Güç ve Hız",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Plyometrik", type: "plyometric", duration: "10 dakika" },
    ],
    exercises: [
      {
        name: "Power Cleans",
        type: "compound",
        sets: 5,
        reps: "3",
        notes: "Maksimal ağırlık",
      },
      {
        name: "Box Jumps",
        type: "plyometric",
        sets: 5,
        reps: "5",
        notes: "Maksimum yükseklik",
      },
      {
        name: "Sprint Intervals",
        type: "cardio",
        distance: "100 metre",
        rounds: 10,
        rest: "60 saniye",
      },
      { name: "Medicine Ball Slams", type: "power", reps: "50 toplam" },
      { name: "Depth Jumps", type: "plyometric", sets: 5, reps: "5" },
      {
        name: "Sled Push/Pull",
        type: "functional",
        distance: "20 metre",
        rounds: 10,
      },
    ],
  },
  34: {
    title: "Ekstrem Dayanıklılık",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "15 dakika" },
    ],
    exercises: [
      {
        name: "Burpee Mile",
        type: "endurance",
        notes: "1 mil boyunca her 10 metrede 1 burpee",
      },
      {
        name: "Merdiven Tırmanışı",
        type: "cardio",
        notes: "30 kat merdiven, 3 set",
      },
      { name: "Thrusters", type: "compound", reps: "100 toplam" },
      { name: "Pull-Ups", type: "compound", reps: "100 toplam" },
      { name: "Dips", type: "compound", reps: "100 toplam" },
      { name: "Plank", type: "core", duration: "10 dakika toplam" },
    ],
  },
  35: {
    title: "Fonksiyonel Fitness",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      {
        name: "Turkish Get-Ups",
        type: "functional",
        sets: 5,
        reps: "3 her taraf",
      },
      {
        name: "Sandbag Clean and Press",
        type: "functional",
        sets: 4,
        reps: "10",
      },
      {
        name: "Tire Flips",
        type: "functional",
        distance: "20 metre",
        rounds: 5,
      },
      { name: "Rope Climbs", type: "functional", reps: "5 toplam" },
      {
        name: "Bear Crawls",
        type: "functional",
        distance: "20 metre",
        rounds: 5,
      },
      {
        name: "Farmer's Carry",
        type: "functional",
        distance: "400 metre toplam",
      },
    ],
  },
  36: {
    title: "Yüksek Hacim Dayanıklılık",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Air Squats", type: "bodyweight", reps: "300 toplam" },
      { name: "Push-Ups", type: "bodyweight", reps: "200 toplam" },
      { name: "Sit-Ups", type: "core", reps: "200 toplam" },
      { name: "Lunges", type: "bodyweight", reps: "200 toplam (her bacak)" },
      { name: "Pull-Ups", type: "bodyweight", reps: "100 toplam" },
      { name: "Burpees", type: "full-body", reps: "100 toplam" },
    ],
  },
  37: {
    title: "Karışık Modal Dayanıklılık",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Row", type: "cardio", distance: "1000 metre" },
      { name: "Thrusters", type: "compound", reps: "50" },
      { name: "Box Jumps", type: "plyometric", reps: "50" },
      { name: "Kettlebell Swings", type: "functional", reps: "50" },
      { name: "Assault Bike", type: "cardio", calories: "50" },
      { name: "Burpees", type: "full-body", reps: "50" },
    ],
  },
  38: {
    title: "Tam Vücut Güç",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      {
        name: "Deadlifts",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "85-90% 1RM",
      },
      {
        name: "Bench Press",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "85-90% 1RM",
      },
      {
        name: "Squats",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "85-90% 1RM",
      },
      {
        name: "Weighted Pull-Ups",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "Ağırlık ekleyin",
      },
      {
        name: "Overhead Press",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "85-90% 1RM",
      },
      {
        name: "Barbell Rows",
        type: "compound",
        sets: 5,
        reps: "5",
        notes: "85-90% 1RM",
      },
    ],
  },
  // Toparlanma (4 gün)
  39: {
    title: "Aktif Dinlenme ve Hafif Kardio",
    exercises: [
      {
        name: "Hafif Tempolu Yürüyüş",
        type: "cardio",
        duration: "45-60 dakika",
      },
      {
        name: "Germe ve Mobilite Çalışması",
        type: "mobility",
        duration: "20 dakika",
      },
      { name: "Foam Rolling", type: "recovery", duration: "15 dakika" },
    ],
  },
  40: {
    title: "Yoga ve Meditasyon",
    exercises: [
      { name: "Yoga Akışı", type: "mobility", duration: "60 dakika" },
      { name: "Nefes Çalışması", type: "mental", duration: "15 dakika" },
      { name: "Meditasyon", type: "mental", duration: "20 dakika" },
    ],
  },
  41: {
    title: "Hafif Yüzme ve Sauna",
    exercises: [
      { name: "Hafif Tempolu Yüzme", type: "cardio", duration: "30 dakika" },
      { name: "Sauna Seansı", type: "recovery", duration: "15-20 dakika" },
      { name: "Soğuk Duş", type: "recovery", duration: "1-2 dakika" },
    ],
  },
  42: {
    title: "Masaj ve Dinlenme",
    exercises: [
      { name: "Profesyonel Masaj", type: "recovery", duration: "60 dakika" },
      { name: "Hafif Germe", type: "flexibility", duration: "15 dakika" },
      { name: "Meditasyon", type: "mental", duration: "15 dakika" },
    ],
  },
  // Final Değerlendirme (3 gün)
  43: {
    title: "Kuvvet ve Güç Testleri",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "1RM Squat Testi", type: "strength" },
      { name: "1RM Bench Press Testi", type: "strength" },
      { name: "1RM Deadlift Testi", type: "strength" },
      { name: "Dikey Sıçrama Testi", type: "power" },
      { name: "Broad Jump Testi", type: "power" },
    ],
  },
  44: {
    title: "Dayanıklılık ve Kondisyon Testleri",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Cooper Testi (12 dakika koşu)", type: "cardio" },
      { name: "400 Metre Sprint", type: "cardio" },
      { name: "2000 Metre Kürek", type: "cardio" },
      { name: "Burpee Testi (1 dakika maksimum)", type: "full-body" },
      { name: "Plank Dayanıklılık Testi", type: "core" },
    ],
  },
  45: {
    title: "Fonksiyonel Fitness ve Vücut Kompozisyonu Değerlendirmesi",
    warmUp: [
      { name: "Dinamik Germe", type: "mobility", duration: "15 dakika" },
      { name: "Hafif Cardio", type: "cardio", duration: "10 dakika" },
    ],
    exercises: [
      { name: "Fonksiyonel Hareket Taraması (FMS)", type: "functional" },
      { name: "Maksimum Push-Up Testi", type: "strength" },
      { name: "Maksimum Pull-Up Testi", type: "strength" },
      { name: "T-Testi (Çeviklik)", type: "agility" },
      { name: "Vücut Kompozisyonu Ölçümü", type: "assessment" },
      { name: "Esneklik Değerlendirmesi", type: "flexibility" },
    ],
  },
};

export const applyPhaseSetReps = (
  phase: Phase,
  workout: Workout,
): Exercise[] => {
  return workout.exercises.map((exercise) => {
    if (exercise.type === "compound") {
      return {
        ...exercise,
        sets: parseInt(phase.setRepScheme.compound.split("x")[0]),
        reps: phase.setRepScheme.compound.split("x")[1],
      };
    } else if (exercise.type === "accessory") {
      return {
        ...exercise,
        sets: parseInt(phase.setRepScheme.accessory.split("x")[0]),
        reps: phase.setRepScheme.accessory.split("x")[1],
      };
    }
    return exercise;
  });
};

export const hardToKillProgram: WorkoutProgram = {
  id: "hard-to-kill-1",
  title: "Hard to Kill Program",
  description: "45 günlük profesyonel antrenman programı",
  category: "strength",
  difficulty: "advanced",
  duration: "45 Gün",
  equipment: [
    "Barbell",
    "Dumbbell",
    "Kettlebell",
    "Pull-up Bar",
    "Bench",
    "Squat Rack",
    "Resistance Bands",
    "Foam Roller",
  ],
  targetMuscles: ["Full Body", "Upper Body", "Lower Body", "Core"],
  phases: phases,
  workouts: workouts,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: "Fitness Team",
  tags: ["strength", "conditioning", "functional-fitness", "military-style"],
  rating: 4.8,
  reviewCount: 156,
};
