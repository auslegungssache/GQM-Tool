import z from "zod"
import {ProjectId} from "@/schema/ids";

export const ProjectSchema = z.object({
    id: ProjectId,
    created_at: z.string(),

    title: z.string(),
})

export type Project = z.infer<typeof ProjectSchema>