import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Audi eTron"
            description="Order Online for Touchless Delivery"
            backgroundImg="Audi-etron.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory" 
        />
        <Section 
            title="Audi A8"
            description="Order Online for Touchless Delivery"
            backgroundImg="Audi-A8.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Audi Q3"
            description="Order Online for Touchless Delivery"
            backgroundImg="Audi-Q3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Audi Q5"
            description="Order Online for Touchless Delivery"
            backgroundImg="Audi-Q5.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Audi S5"
            description="Order Online for Touchless Delivery"
            backgroundImg="Audi-S5.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Audi Accessories"
            description=""
            backgroundImg="Audi-Accessories.jpg"
            leftBtnText="Shop Now"
            // rightBtnText=""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`