import { Container, Form } from "react-bootstrap"
import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import './LoginSignup.css';

const LoginSingup = () => {
  const [selected, setSelected] = React.useState("login");
  
  return (
    <div className="LS">
      <Card className="cardcover">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>


            <Tab key="sign-up" title="Sign up">
              <form className="sign">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginSingup;
  //   <Container>
  //     <div className="login-warpper">
  //       <h2>Login</h2>
  //       <Form id="login-form">
  //         <Input type="text" className="userName" placeholder="ID입력하세요"></Input>
  //         <Input type="text" className="userPassword" placeholder="Password를 입력하세요"></Input>
  //         <label for="remember-check">
  // //           <Input type="checkbox" id="remember-check">아이디 저장하기</Input>
  // //         </label>
  // //         <input type="submit" value="Login"></input>
  //       </Form>

  //     </div>
  //   </Container>

   