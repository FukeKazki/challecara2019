import React from 'react';
import { AppLoading } from 'expo';
import {
  Container,
  Header,
  Body,
  Content,
  Title,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>Developer</Title>
          </Body>
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="map" />
              <Text>Map</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon type="AntDesign" name="form" />
              <Text>Post</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}