import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = ({ avatar, username, excerpt }) => (
  <UserWrapper>
    <Avatar src={avatar} alt="" />
    <Description>
      <Username>{username}</Username>
      <Excerpt>{excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default function UsersList() {
  return (
    <Layout>
      <SEO title="Styled" />
      <Container>
        <h1>About Styled Components</h1>
        <p>Styled Components is cool</p>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
    </Layout>
  )
}
User.propTypes = {
  avatar: PropTypes.node.isRequired,
  username: PropTypes.node.isRequired,
  excerpt: PropTypes.node.isRequired,

}
