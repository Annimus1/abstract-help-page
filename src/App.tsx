import Header from "./components/Header"
import Prompt from "./components/Prompt"
import Main, {item} from "./components/Main"
import Footer from "./components/Footer"

//https://www.frontendpractice.com/projects/abstract

function App() {
  const data: item[] = [
    {
    title: "Using Abstract",
    msg: "Abstract lets you manage, version, and document your designs in one place.",
    url_image: "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
    learn_more: "https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract"
    },
    {
      title: "Manage your account",
      msg: "Configure your account settings, such as your email, profile details, and password.",
      url_image: "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
      learn_more: "https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account"
    },
    {
      title: "Manage organizations, teams, and projects",
      msg: "Use Abstract organizations, teams, and projects to organize your people and your work.",
      url_image: "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
      learn_more: "https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects"
    },
    {
      title: "Manage billing",
      msg: "Change subscriptions and payment details.",
      url_image: "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
      learn_more: "https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing"
    },
    {
      title: "Authenticate to Abstract",
      msg: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      url_image: "https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
      learn_more: "https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract"
    },
    {
      title: "Abstract support",
      msg: "Get in touch with a human.",
      url_image: "https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
      learn_more: "https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support"
    },
  ]

  return (
    <>
      <Header />
      <Prompt />     
      <Main props={data} />
      <Footer />
    </>
  )
}

export default App
