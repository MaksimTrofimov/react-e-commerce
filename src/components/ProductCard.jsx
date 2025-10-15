import { Button } from './Button';

export function ProductCard({ title, price, image, onDetails, onBuy }) {
  return (
    <article>
      <img src={image} alt={title} className="h-48" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">${price}</p>
      <div className="flex justify-center gap-3 mt-2">
        <Button label="Buy" color="green" onClick={onBuy} />
        <Button label="Detail" color="blue" onClick={onDetails} />
      </div>
    </article>
  );
}
