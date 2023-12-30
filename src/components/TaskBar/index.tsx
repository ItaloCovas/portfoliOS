import { Clock } from '../Clock';

export function TaskBar() {
  return (
    <header className="bg-cblack-primary/90 text-white h-8 w-full flex px-4 pl-0 select-none">
      <div className="w-1/3 flex items-center cursor-pointer">LOGO</div>
      <div className="w-1/3 flex items-center justify-center">PortfoliOS</div>
      <div className="w-1/3 flex items-center justify-end">
        <Clock />
      </div>
    </header>
  );
}
