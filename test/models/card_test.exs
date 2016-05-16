defmodule GusaianiPhoenixTrello.CardTest do
  use GusaianiPhoenixTrello.ModelCase

  alias GusaianiPhoenixTrello.Card

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Card.changeset(%Card{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Card.changeset(%Card{}, @invalid_attrs)
    refute changeset.valid?
  end
end
