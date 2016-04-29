ExUnit.start

Mix.Task.run "ecto.create", ~w(-r GusaianiPhoenixTrello.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r GusaianiPhoenixTrello.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(GusaianiPhoenixTrello.Repo)

