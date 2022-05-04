import { feedbackCards, FeedBackType } from '..';
import { CloseButton } from '../../CloseButton';

interface IFeedBackSelectionProps {
  toggleFeedbackSelection: (type: FeedBackType) => void
}

export function FeedBackSelection({ toggleFeedbackSelection }: IFeedBackSelectionProps) {

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-8 w-full">
        {Object.entries(feedbackCards).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => toggleFeedbackSelection(key as FeedBackType)}>
              <img className="w-10 h-10" src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}