import React from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";

function App() {
  return  <Layout title="Hello">
    <Hero />
    <Brands />
  </Layout>
}

export default App
