"use client"

import {createClient as createClientC} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export default function CreateProject() {
    "use client"

    const router = useRouter()

    const supabase = createClientC();
    async function createProject()
    {
        "use client"

        await supabase.from("projects").upsert({
            title: "test"
        })

        router.refresh()
    }


    return <button onClick={createProject}>New Project</button>
}