import React from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";

// ★모달창으로 바꿔서 제작해보기

const SignupPage = ({ setSelected }) => {
  return (
    <Card className="cardcover">
      <CardBody className="overflow-hidden">
        <form className="sign">
          <Input isRequired label="Name" placeholder="이름을 입력하세요" type="text" />
          <Input isRequired label="Email" placeholder="email을 입력하세요" type="email" />
          <Input
            isRequired
            label="Password"
            placeholder="password를 입력하세요"
            type="password"
          />
          <p className="text-center text-small">
            이미 계정이 있습니까?{" "}
            <Link size="sm" onPress={() => setSelected("login")}>
              로그인
            </Link>
          </p>
          <div className="flex gap-2 justify-end">
            <Button fullWidth color="primary">
              가입하기
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default SignupPage;
