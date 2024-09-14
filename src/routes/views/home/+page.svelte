<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    import wretch from "wretch";

    let ID: string;
    let respone: string = "";
    let error: string = "";

    const wait = (ms: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const add = async () => {
        //เชื่อต่อ API
        await wretch("/api/cow/get")
            .post({
                id: ID,
            })
            // response หากกรอกข้อมูลไม่ครบ
            .badRequest(async (e) => {
                respone = "";
                error = JSON.parse(e.message).message;
                await wait(3000);
                window.location.reload();
            })
            // response หากหาข้อมูลไม่เจอ
            .notFound(async (e) => {
                respone = "";
                error = JSON.parse(e.message).message;
                await wait(3000);
                window.location.reload();
            })
            // response หากสำเร็จ
            .json(async (e) => {
                error = "";
                respone = e.milkAmount;
            });
    };
</script>

<div class="flex w-full h-screen">
    <div
        class="flex w-full m-5 justify-center items-center"
    >
        <div
            class="flex flex-col gap-4 w-[300px] shadow-lg shadow-gray-600 p-10 rounded-lg"
        >
            <Label class="font-extrabold">Cow ID</Label>
            <Input placeholder="your cow id" bind:value={ID}></Input>
            <Button on:click={add}>OK</Button>
            {#if respone}
                <p class="text-center text-green-400">
                    <strong>milkAmount:</strong>
                    {respone}
                </p>
            {/if}
            {#if error}
                <p class="text-center text-red-400">{error}</p>
            {/if}
        </div>
    </div>
</div>
