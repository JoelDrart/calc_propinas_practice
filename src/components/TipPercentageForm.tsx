const tipOptions = [
    {
        id: "tip-10",
        value: 0.1,
        label: "10%",
    },
    {
        id: "tip-20",
        value: 0.2,
        label: "20%",
    },
    {
        id: "tip-50",
        value: 0.5,
        label: "50%",
    },
];

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>;
    tip: number;
};

export default function TipPercentageForm({
    setTip,
    tip,
}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl mb-2">Propina:</h3>

            <form action="" className="flex justify-between w-60">
                {tipOptions.map((tipOption) => (
                    <div
                        key={tipOption.id}
                        className=" flex gap-2 p-2 border rounded-md peer-checked:bg-blue-500 peer-checked:text-white"
                    >
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tip === tipOption.value}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
}
