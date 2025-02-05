const AuthorizationComponent = ({ settings }: { settings: any}) => {

    return (
        <div>
            <h3>User Settings</h3>
            <pre>{JSON.stringify(settings, null, 2)}</pre>
        </div>
    )
}
export default AuthorizationComponent
