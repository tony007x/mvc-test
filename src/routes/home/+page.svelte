<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";


</script>

<div class="flex w-full h-screen">
    <div class="flex w-full border border-[red] m-5 justify-center items-center">
        <div class="flex flex-col gap-4 w-[300px] h-[500px] border border-[red]">
            <Label>Cow ID</Label>
            <Input></Input>
            <Label>Cow Type</Label>
            <Input></Input>
            <Label>Cow Years</Label>
            <Input></Input>
        </div>
    </div>
</div>