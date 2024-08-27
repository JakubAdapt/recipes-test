'use client'

import { DefaultErrorPage } from '@app/components/molecules/default-error-page'

export default function ErrorBoundary({ error }: { error: Error }) {
  return <DefaultErrorPage />
}
