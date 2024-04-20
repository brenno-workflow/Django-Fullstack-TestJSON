import { PopoverShare } from '@/components/Popover/share'

export function ItemCV() {
  return (
    <div className="flex gap-4 items-center">
      <div className="border rounded-md p-4 w-full flex justify-between">
        <div className="w-1/2 text-left">Nome Completo</div>
        <div className="w-1/2 text-right">Eng de Software</div>
      </div>

      <PopoverShare />
    </div>
  )
}
