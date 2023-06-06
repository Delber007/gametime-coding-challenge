import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { fetchSearchResults } from "./components/searchBar/searchBarAPI";
import SearchBar, { formatResults } from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import ResultUnit from "./components/searchResults/ResultUnit";

test("tests fetch search results end point", async () => {
  const response = await fetchSearchResults("o");
  // expects at least an object with an 'events' attribute containing
  // an array. We've tested this on postman.
  expect(response).toEqual(
    expect.objectContaining({ events: expect.any(Array) })
  );
});

test("test correct formatting of results", () => {
  // mockResultsList is what we expect from mockResponse.
  // This is based on the requirements for this challenge.
  expect(formatResults(mockResponse)).toStrictEqual(mockResultsList);
});

test("test results list renders all", () => {
  render(<SearchResults results={mockResultsList} />);
  //mockResultsList contains has a size of 9, so we should be
  //mapping that many
  expect(screen.getByTestId("results-div").children.length).toBe(
    mockResultsList.length
  );
});

test("test result unit renders correctly", () => {
  const { image, title, subtitle } = mockResultsList[0];
  render(<ResultUnit image={image} title={title} subtitle={subtitle} />);
  // expecting every prop to be displayed
  expect(screen.getByTestId("result-img").getAttribute("src")).toBe(image);
  expect(screen.getByTestId("result-title").innerHTML).toBe(title);
  expect(screen.getByTestId("result-subtitle").innerHTML).toBe(subtitle);
});

test("typing on search input should change value", () => {
  render(<SearchBar />);
  fireEvent.change(screen.getByTestId("search-input"), {
    target: { value: "oak" },
  });
  // if this component's state is set up correctly, the action of
  // typing should change the input value
  expect(screen.getByTestId("search-input").getAttribute("value")).toBe("oak");
});

// this mock response mimics the search api response, with each entity's array
// containing 4 objects ordered, as noted by their names. This is to test that
// we are displaying the each list element in correct order, and not displaying
// more than 3 of each
const mockResponse = {
  events: [
    {
      event: {
        map_url: "image",
        name: "event 1",
      },
      venue: {
        name: "venue",
      },
    },
    {
      event: {
        map_url: "image",
        name: "event 2",
      },
      venue: {
        name: "venue",
      },
    },
    {
      event: {
        map_url: "image",
        name: "event 3",
      },
      venue: {
        name: "venue",
      },
    },
    {
      event: {
        map_url: "image",
        name: "event 4",
      },
      venue: {
        name: "venue",
      },
    },
  ],
  performers: [
    {
      hero_image_url: "image",
      name: "performer 1",
      category: "category",
    },
    {
      hero_image_url: "image",
      name: "performer 2",
      category: "category",
    },
    {
      hero_image_url: "image",
      name: "performer 3",
      category: "category",
    },
    {
      hero_image_url: "image",
      name: "performer 4",
      category: "category",
    },
  ],
  venues: [
    {
      image_url: "image",
      name: "venue 1",
      city: "city",
    },
    {
      image_url: "image",
      name: "venue 2",
      city: "city",
    },
    {
      image_url: "image",
      name: "venue 3",
      city: "city",
    },
    {
      image_url: "image",
      name: "venue 4",
      city: "city",
    },
  ],
};

// this mock results list doubles as a mock list and as the correct
// way to format the mock response above.
const mockResultsList = [
  {
    image: "image",
    title: "event 1",
    subtitle: "venue",
  },
  {
    image: "image",
    title: "event 2",
    subtitle: "venue",
  },
  {
    image: "image",
    title: "event 3",
    subtitle: "venue",
  },
  {
    image: "image",
    title: "performer 1",
    subtitle: "category",
  },
  {
    image: "image",
    title: "performer 2",
    subtitle: "category",
  },
  {
    image: "image",
    title: "performer 3",
    subtitle: "category",
  },
  {
    image: "image",
    title: "venue 1",
    subtitle: "city",
  },
  {
    image: "image",
    title: "venue 2",
    subtitle: "city",
  },
  {
    image: "image",
    title: "venue 3",
    subtitle: "city",
  },
];
