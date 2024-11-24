import { Player, PlayerAPIPayload } from "@/types";
import { parseTeam } from "../utils";

export const parsePlayers: (players: PlayerAPIPayload[]) => Player[] = (
  players: PlayerAPIPayload[]
) =>
  players.map(
    ({
      id,
      first_name,
      last_name,
      jersey_number,
      draft_year,
      draft_round,
      draft_number,
      team,
      ...playerInfos
    }) => ({
      ...playerInfos,
      id: id.toString(),
      firstName: first_name,
      lastName: last_name,
      jerseyNumber: jersey_number,
      draftYear: draft_year,
      draftRound: draft_round,
      draftNumber: draft_number,
      team: parseTeam(team),
    })
  );
