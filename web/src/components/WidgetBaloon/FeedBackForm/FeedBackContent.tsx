import { ArrowArcLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { feedbackCards, FeedBackType } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface IFeedBackContentProps {
  feedbackSelection: FeedBackType
  resetSelection: () => void
  onFeedbackSent: () => void
}

export function FeedBackContent({
  feedbackSelection,
  onFeedbackSent,
  resetSelection }: IFeedBackContentProps) {
  const feedbackSelected = feedbackCards[feedbackSelection]

  const [userText, setUserText] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    console.log({
      screenshot,
      userText
    })

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={resetSelection}>
          <ArrowArcLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={feedbackSelected.image.source} alt={feedbackSelected.image.alt} />
          {feedbackSelected.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Descreva tudo, com o máximo de detalhes, aqui neste campo."
          onChange={event => setUserText(event.target.value)}
        >
        </textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            disabled={userText.length === 0}
            loadScreenshotPreview={setScreenshot}
          />

          <button
            type="submit"
            disabled={userText.length === 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}