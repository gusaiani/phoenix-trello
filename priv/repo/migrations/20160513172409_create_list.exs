defmodule GusaianiPhoenixTrello.Repo.Migrations.CreateList do
  use Ecto.Migration

  def change do
    create table(:lists) do
      add :name, :string, null: false
      add :position, :integer, default: 0
      add :board_id, references(:boards, on_delete: :delete_all)

      timestamps
    end
    create index(:lists, [:board_id])

  end
end
