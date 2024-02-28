import { HTMLAttributes } from "react";

type _signInButtonProps = {} & HTMLAttributes<HTMLButtonElement>;
const _signInButton = (props: _signInButtonProps) => {
  return (
    <a href="http://13.210.209.64:8080/oauth2/authorization/kakao?redirect_uri=http://127.0.0.1:3000/auth">
      카카오 로그인
    </a>
  );
};

export const KakaoLoginComponents = {
  SigninButton: _signInButton,
};
