import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    const subtotal = useMemo(
        () =>
            order.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            ),
        [order]
    );

    const tipAmount = useMemo(() => subtotal * tip, [subtotal, tip]);

    const total = useMemo(() => subtotal + tipAmount, [subtotal, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina: </h2>
                <p>
                    Subtotal:{" "}
                    <span className="font-bold text-center ">
                        {formatCurrency(subtotal)}
                    </span>
                </p>
                <p>
                    Propina:{" "}
                    <span className="font-bold ">
                        {formatCurrency(tipAmount)}
                    </span>
                </p>
                <p>
                    TOTAL:{" "}
                    <span className="font-bold ">{formatCurrency(total)}</span>
                </p>
            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-30"
                disabled={total === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    );
}
