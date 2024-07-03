export default function ErrorFallback({error}: {error: Error}) {
    return (
        <div>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
        </div>
    )
}
