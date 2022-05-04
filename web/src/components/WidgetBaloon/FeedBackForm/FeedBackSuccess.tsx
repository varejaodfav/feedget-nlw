import successImageUrl from '../../../assets/success-icon.png';
import { CloseButton } from '../../CloseButton';

interface IFeedBadkSuccessProps {
  resetSelection: () => void
}

export function FeedBackSuccess({ resetSelection }: IFeedBadkSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} className="w-10 h-9" />

        <span>Agradecemos seu feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={resetSelection}
        >
          Enviar outro feedback
        </button>
      </div>
    </>
  );
}