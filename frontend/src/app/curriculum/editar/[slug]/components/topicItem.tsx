import { Collapse } from '@/components/Collapses/collapse'
import { ModalAddTopic } from '@/components/Modals/addTopic'
import { ModalDeletTopic } from '@/components/Modals/deleteTopic'

export function TopicItem() {
  return (
    <div className="flex w-full gap-4">
      <Collapse
        title="Slot"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate beatae magni eaque fuga id ducimus adipisci ex. Dolorum iure quia iusto optio quam eligendi a dolores et magni impedit!"
      />
      <div className="flex gap-3 items-center">
        <ModalAddTopic />
        <ModalDeletTopic />
      </div>
    </div>
  )
}
