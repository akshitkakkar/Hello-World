import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponent from './components/PureComponent';
import ParentComp from './components/ParentComp';
import RefsDemo from './RefsDemo';
import Input from './Input';
import FocusInput from './FocusInput';
import FRParentInput from './FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounter2 from './HoverCounter2';
import User from './components/User';
import CounterRender from './CounterRender';
import { UserProvider } from './userContext';
import ComponentC from './ComponentC';
import PostList from './components/PostList';
import PostForm from './PostForm';


function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce"/>
      <Welcome name="Clark"/>
      <Welcome name="Diana"/>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <Form/>
      <LifecycleA/>
      <FragmentDemo/>
      <Table/>
      <ParentComp/>
      <RefsDemo/>
      <FocusInput/>
      <FRParentInput/>
      <PortalDemo/>
      <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary>
      <ClickCounter name="Akshit"/>
      <HoverCounter/>
      <ClickCounterTwo/>
      <HoverCounter2/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Akshit' : 'Guest'}/>
      <CounterRender render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}/>
      <CounterRender render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>}/>
      <UserProvider value="Akshit">
        <ComponentC/>
      </UserProvider>
      <PostList/>
      <PostForm/>
    </div>
  );
}

export default App;
