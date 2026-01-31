

export const Button = ({type,children,...buttonProps}) => {
    const className = type === 'primary' ? 'PrimaryButton': 'SecondaryButton';

    return(
        <button className={`Button ${className}`} {...buttonProps}>{children}</button>
    );
};

export const LoginButton = ({type, children, ...buttonProps}) =>{
    return(
        <Button type = 'secondary'
        {...buttonProps} onClick = {() =>{
            alert('Login');
        }}>
            {children}
        </Button>
    )
}

export const SignButton = ({type,children, ...buttonprops}) => {
    return(
        <Button type='primary' {...buttonprops} onClick = {()=> alert('signing in')}>
            {children}
        </Button>
    )
}