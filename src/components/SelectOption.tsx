import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SelectOption({ select, placeholder }: { select: Array<{ label: string, value: string }>, placeholder: string }) {
    return (
        <>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            select.map((el, i: number) => {
                                return <SelectItem value={el.value} key={i}>{el.label}</SelectItem>
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}