import { Clock } from '../Clock';

export function TaskBar() {
  return (
    <header className="bg-black-primary/90 text-white h-8 w-full flex px-4 pl-0">
      <div className="w-1/3 flex items-center">LOGO</div>
      <div className="w-1/3 flex items-center justify-center">2</div>
      <div className="w-1/3 flex items-center justify-end">
        <Clock />
      </div>
    </header>
  );
}
