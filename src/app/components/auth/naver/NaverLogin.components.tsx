const _signInButton = () => {
  return (
    <a href='http://13.210.209.64:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/auth'>
      네이버
    </a>
  );
};

export const NaverLoginComponents = {
  SigninButton: _signInButton,
};
