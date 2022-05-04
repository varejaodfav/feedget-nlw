import { useState } from 'react';
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug-icon.png';
import suggestionImageUrl from '../../assets/suggestion-icon2.png';

import { FeedBackSelection } from './FeedBackForm/FeedBackSelection';
import { FeedBackContent } from './FeedBackForm/FeedBackContent';
import { FeedBackSuccess } from './FeedBackForm/FeedBackSuccess';

export const feedbackCards = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Sugestão',
    image: {
      source: suggestionImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
}

export type FeedBackType = keyof typeof feedbackCards


export function WidgetForm() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackCard, setFeedbackCard] = useState<FeedBackType | null>(null);

  function resetFeedbackSelection() {
    setFeedbackSent(false)
    setFeedbackCard(null)
  }


  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


      {feedbackSent ? (
        <FeedBackSuccess resetSelection={resetFeedbackSelection} />
      ) : (
        <>
          {!feedbackCard ? (
            <FeedBackSelection toggleFeedbackSelection={setFeedbackCard} />
          ) : (
            <FeedBackContent
              feedbackSelection={feedbackCard}
              resetSelection={resetFeedbackSelection}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )
          }
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Desenvolvido pela TIOp do CINDACTA III
      </footer>
    </div >
  );
}