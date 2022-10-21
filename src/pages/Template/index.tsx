import { useContext } from "react";
import Templates from "../../components/Templates";
import { UserContext } from "../../contexts/UserContext";
import { Subtitle } from "../GetStarted/styles";
import { Container, TemplateContainer } from "./styles";

import {FlowersImg, PinkImg, StarsImg, TreesImg, SnowImg, EggsImg } from "../../assets/images/templates/index";


export default function Template() {
	const {userName, setUserName} = useContext(UserContext);

	return (

		<Container>
			<h1>Hey, <span>Gabriel</span>!</h1>
			<Subtitle>Now, let's choose a template</Subtitle>

			<TemplateContainer>
				<Templates background={FlowersImg} />
				<Templates background={PinkImg} />
				<Templates background={StarsImg} />
				<Templates background={TreesImg} />
				<Templates background={SnowImg} />
				<Templates background={EggsImg} />
			</TemplateContainer>
		</Container>
	);
}
