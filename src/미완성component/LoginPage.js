import React from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";

const LoginPage = ({ setSelected }) => {
  return (
    <Card className="cardcover">
      <CardBody className="overflow-hidden">
        <form className="form">
          <Input isRequired label="Email" placeholder="email을 입력하세요" type="email" />
          <Input
            isRequired
            label="Password"
            placeholder="password를 입력하세요"
            type="password"
          />
          <p className="text-center text-small">
            회원가입을 하시겠습니까?{" "}
            <Link size="sm" onPress={() => setSelected("sign-up")}>
              회원가입
            </Link>
          </p>
          <div className="flex gap-2 justify-end">
            <Button fullWidth color="primary">
              로그인
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default LoginPage;
