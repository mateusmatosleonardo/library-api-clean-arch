import { AVAILABILITY } from "@/application/enums/availability.enum"

export interface Book {
  title: string
  subtitle: string | null
  author: string
  publisher: string
  publication_date: string
  gender: string
  edition: string
  availability: string
  isbn: string
}
