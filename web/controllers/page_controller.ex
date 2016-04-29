defmodule GusaianiPhoenixTrello.PageController do
  use GusaianiPhoenixTrello.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
