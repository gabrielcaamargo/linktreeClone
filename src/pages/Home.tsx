import { useState, useEffect, useContext } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { UserContext } from "../contexts/UserContext";
import { Container } from "./styles";

export default function Home() {
  const {userName, setUserName} = useContext(UserContext)
  return (
      <Container>
        <h1>let's get <span>started</span>.</h1>
        <Input
          type="text"
          placeholder="your name here"
          onChange={event => setUserName(event.target.value)}
        />
        <Button
          disabled={userName.length < 2}>
            get started
        </Button>
        <h1>{userName}</h1>
      </Container>
  )
}
