import { cn } from '@/utils/utils'
import { DEFAULT_PROGRESS_KNOB_WIDTH } from './constants'

interface ProgressBarKnobProps {
  width?: number
}

export function ProgressBarKnob({ width = DEFAULT_PROGRESS_KNOB_WIDTH }: ProgressBarKnobProps) {
  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(`bg-steamGold h-4/6`)}
    />
  )
}
