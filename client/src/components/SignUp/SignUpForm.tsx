import React, { useState } from "react";

const SignUpForm = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setEnteredPassword(event.target.value);
  };

  const signUpHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      const data = {
        email: enteredEmail,
        password: enteredPassword,
      };

      const res = await fetch("http://localhost:8080/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) alert(res.message);
          if (res.details) alert(res.details);
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form>
        <label htmlFor="signupemail">이메일</label>
        <input id="signupemail" type="email" onChange={emailChangeHandler} />
        <label htmlFor="signupPassword">패스워드</label>
        <input
          id="signupPassword"
          type="password"
          onChange={passwordChangeHandler}
        />
        <button>로그인페이지 돌아가기</button>
        <button onClick={signUpHandler}>회원가입</button>
      </form>
    </>
  );
};

export default SignUpForm;
