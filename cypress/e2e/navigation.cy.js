/* eslint-disable no-undef */
/// <reference types="cypress" />

const AREAS_LINK = "landscape";
const RESOURCES_LINK = "map";
const API_LINK = "cloud_download";

beforeEach(() => {
  cy.visit("/");
});

describe("Navigation", () => {
  it("should navigate to Areas", () => {
    cy.get("a").contains(AREAS_LINK).click();
    cy.url().should("include", "/areas");
  });

  it("should navigate to Resources", () => {
    cy.get("a").contains(RESOURCES_LINK).click();
    cy.url().should("include", "/resources");
  });

  it("should navigate to Api Playground", () => {
    cy.get("a").contains(API_LINK).click();
    cy.url().should("include", "/apiPlayground");
  });
});
