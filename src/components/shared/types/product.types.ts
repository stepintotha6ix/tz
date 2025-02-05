export interface IProduct {
    id: number
    title: string
    specializedSubjects?: {
        skills?: { id: number; title: string }[];
      };
}