import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../contexts/AuthProvider";

const Blogs = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="py-12">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-start w-3/5 m-auto">
            <h2 className="text-3xl font-bold text-gray-800  md:text-4xl dark:text-white">
              Blogs
            </h2>

            <div className="py-16">
              <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid gap-12 md:gap-6 md:grid-cols-1 lg:gap-12">
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://www.freecodecamp.org/news/content/images/2022/02/how-to-manage-state-react.png">
                        <img
                          src="https://www.freecodecamp.org/news/content/images/2022/02/how-to-manage-state-react.png"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>

                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      What are the different ways to manage a state in a React
                      application?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      There are four main types of state we need to properly
                      manage in our React apps: <br />
                      <h3>1. Local state</h3>
                      <small>
                        Local (UI) state – Local state is data we manage in one
                        or another component.
                        <br />
                        Local state is most often managed in React using the
                        useState hook.
                        <br /> For example, local state would be needed to show
                        or hide a modal component or to track values for a form
                        component, such as form submission, when the form is
                        disabled and the values of a form’s inputs.
                      </small>
                      <h3>2. Global (UI) state</h3>
                      <small>
                        Global state is data we manage across multiple
                        components.
                        <br />
                        Global state is necessary when we want to get and update
                        data anywhere in our app, or in multiple components at
                        least.
                      </small>
                      <h3>3. Server state</h3>
                      <small>
                        Data that comes from an external server that must be
                        integrated with our UI state.
                        <br />
                        There are several pieces of state that must be managed
                        every time you fetch or update data from an external
                        server, including loading and error state.
                      </small>
                      <h3>4. URL state </h3>
                      <small>
                        Data that exists on our URLs, including the pathname and
                        query parameters.
                        <br />
                        URL state is often missing as a category of state, but
                        it is an important one. In many cases, a lot of major
                        parts of our application rely upon accessing URL state.
                        Try to imagine building a blog without being able to
                        fetch a post based off of its slug or id that is located
                        in the URL!
                      </small>
                    </p>
                    <div className="flex gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png">
                        <img
                          src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      How does prototypical inheritance work?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The Prototypal Inheritance is a feature in javascript used
                      to add methods and properties in objects. It is a method
                      by which an object can inherit the properties and methods
                      of another object. Traditionally, in order to get and set
                      the [[Prototype]] of an object, we use Object.
                      getPrototypeOf and Object.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png">
                        <img
                          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      What is a unit test? Why should we write unit tests?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The main objective of unit testing is to isolate written
                      code to test and determine if it works as intended. Unit
                      testing is an important step in the development process,
                      because if done correctly, it can help detect early flaws
                      in code which may be more difficult to find in later
                      testing stages.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:1450/h:740/q:mauto/f:avif/https://www.codeinwp.com/wp-content/uploads/2019/01/angular-vs-vue-vs-react.jpg">
                        <img
                          src="https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:1450/h:740/q:mauto/f:avif/https://www.codeinwp.com/wp-content/uploads/2019/01/angular-vs-vue-vs-react.jpg"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      Angular vs React vs Vue: Who wins?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Angular is the most mature of the frameworks, has good
                      backing in terms of contributors and is a complete
                      package.
                      <br />
                      Angular is the most mature of the frameworks, has good
                      backing in terms of contributors and is a complete
                      package.
                      <br />
                      Angular is a good choice for companies with large teams
                      and developers who already use TypeScript.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      React is just old enough to be mature and has a huge
                      number of contributions from the community. It has gained
                      widespread acceptance. The job market for React is really
                      good, and the future for this framework looks bright.
                      <br />
                      React looks like a good choice for someone getting started
                      with front-end JavaScript frameworks, startups, and
                      developers who like some flexibility. The ability to
                      integrate with other frameworks seamlessly gives it a
                      great advantage for those who would like some flexibility
                      in their code.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Vue is newest to the arena, without the backing of a major
                      company.
                      <br />
                      However, it has done really well in the last few years to
                      come out as a strong competitor for Angular and React, and
                      especially so with the release of Vue 3.0. This is perhaps
                      playing a role with a lot of Chinese giants like Alibaba
                      and Baidu picking Vue as their primary front-end
                      JavaScript framework. Vue should be your choice if you
                      prefer simplicity, but also like flexibility.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
