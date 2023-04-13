import { Tags, SportsMap, SportsTagsMap } from 'types/markets';

export const TAGS_LIST: Tags = [
    {
        id: 9001,
        label: 'NCAA Football',
        logo: `/logos/leagueLogos/ncaa.png`,
        logoClass: 'icon-league league--ncaa',
        favourite: false,
        hidden: false,
        priority: 202,
    },
    {
        id: 9002,
        label: 'NFL',
        logo: `/logos/leagueLogos/nfl.png`,
        logoClass: 'icon-league league--nfl',
        favourite: false,
        hidden: false,
        priority: 201,
    },
    {
        id: 9003,
        label: 'MLB',
        logo: `/logos/leagueLogos/mlb.svg`,
        logoClass: 'icon-league league--mlb',
        favourite: false,
        hidden: false,
        priority: 401,
    },
    {
        id: 9004,
        label: 'NBA',
        logo: `/logos/leagueLogos/nba.svg`,
        logoClass: 'icon-league league--nba',
        favourite: false,
        hidden: false,
        priority: 301,
    },
    {
        id: 9005,
        label: 'NCAA Basketball',
        logoClass: 'icon-league league--ncaa',
        favourite: false,
        hidden: false,
        priority: 302,
    },
    {
        id: 9006,
        label: 'NHL',
        logo: `/logos/leagueLogos/nhl.png`,
        logoClass: 'icon-league league--nhl',
        favourite: false,
        hidden: false,
        priority: 501,
    },
    {
        id: 9007,
        label: 'UFC',
        logo: '/logos/ufc-logo.png',
        logoClass: 'icon-league league--ufc',
        favourite: false,
        hidden: false,
        priority: 601,
    },
    { id: 9008, label: 'WNBA', logoClass: 'icon-league league--wnba', favourite: false, hidden: false, priority: 304 },
    {
        id: 9010,
        label: 'MLS',
        logo: `/logos/leagueLogos/mls.png`,
        logoClass: 'icon-league league--mls',
        favourite: false,
        hidden: false,
        priority: 106,
    },
    {
        id: 9011,
        label: 'EPL',
        logo: `/logos/leagueLogos/EPL.png`,
        logoClass: 'icon-league league--epl',
        favourite: false,
        hidden: false,
        priority: 101,
    },
    {
        id: 9012,
        label: 'Ligue 1',
        logo: `/logos/leagueLogos/Ligue1.png`,
        logoClass: 'icon-league league--ligue1',
        favourite: false,
        hidden: false,
        priority: 105,
    },
    {
        id: 9013,
        label: 'Bundesliga',
        logo: '/logos/leagueLogos/bundesliga.png',
        logoClass: 'icon-league league--bundesliga',
        favourite: false,
        hidden: false,
        priority: 104,
    },
    {
        id: 9014,
        label: 'La Liga',
        logo: `/logos/leagueLogos/LaLiga.png`,
        logoClass: 'icon-league league--la-liga',
        favourite: false,
        hidden: false,
        priority: 102,
    },
    {
        id: 9015,
        label: 'Serie A',
        logo: `/logos/leagueLogos/seriea.png`,
        logoClass: 'icon-league league--serie-a',
        favourite: false,
        hidden: false,
        priority: 103,
    },
    {
        id: 9016,
        label: 'UEFA Champions League',
        logo: `/logos/leagueLogos/ucl-white.png`,
        logoClass: 'icon-league league--ucl',
        favourite: false,
        hidden: false,
        priority: 108,
    },
    {
        id: 9017,
        label: 'UEFA Europa League',
        logo: ``,
        logoClass: 'icon-league league--uel',
        favourite: false,
        hidden: false,
        priority: 109,
    },
    {
        id: 9018,
        label: 'FIFA World Cup',
        logo: ``,
        logoClass: 'icon-league league--fifa-world-cup',
        favourite: false,
        hidden: true,
        priority: 0,
    },
    {
        id: 9019,
        label: 'J1 League',
        logo: ``,
        logoClass: 'icon-league league--j1',
        favourite: false,
        hidden: false,
        priority: 107,
    },
    {
        id: 9100,
        label: 'Formula 1',
        logo: '/logos/leagueLogos/f1.png',
        logoClass: 'icon-league league--f1',
        favourite: false,
        hidden: false,
        priority: 701,
    },
    {
        id: 9101,
        label: 'MotoGP',
        logo: `/logos/leagueLogos/motogp.png`,
        logoClass: 'icon-league league--motogp',
        favourite: false,
        hidden: false,
        priority: 702,
    },
    {
        id: 9153,
        label: 'Grand Slam',
        logo: `/logos/Tennis/atp.png`,
        logoClass: 'icon-league league--atp',
        favourite: false,
        hidden: false,
        priority: 602,
    },
    {
        id: 9156,
        label: 'ATP Events',
        logo: `/logos/Tennis/atp.png`,
        logoClass: 'icon-league league--atp',
        favourite: false,
        hidden: false,
        priority: 603,
    },
    {
        id: 18977,
        label: 'CS GO',
        logo: `/logos/csgo/csgo.png`,
        logoClass: 'icon-league league--csgo',
        favourite: false,
        hidden: false,
        priority: 801,
    },
    {
        id: 18983,
        label: 'DOTA 2',
        logo: `/logos/dota2/dota2.png`,
        logoClass: 'icon-league league--dota2',
        favourite: false,
        hidden: false,
        priority: 802,
    },
    {
        id: 19138,
        label: 'LOL',
        logo: `/logos/lol/lol.png`,
        logoClass: 'icon-league league--lol',
        favourite: false,
        hidden: false,
        priority: 803,
    },
    {
        id: 9020,
        label: 'Indian Premier League',
        logo: ``,
        logoClass: 'icon-league league--ipl',
        favourite: false,
        hidden: false,
        priority: 901,
    },
    {
        id: 9399,
        label: 'Euroleague',
        logoClass: 'icon-league league--euroleague',
        favourite: false,
        hidden: false,
        priority: 303,
    },
];

export const SPORTS_MAP: SportsMap = {
    9001: 'Football',
    9002: 'Football',
    9003: 'Baseball',
    9004: 'Basketball',
    9005: 'Basketball',
    9006: 'Hockey',
    9007: 'UFC',
    9008: 'Basketball',
    9010: 'Soccer',
    9011: 'Soccer',
    9012: 'Soccer',
    9013: 'Soccer',
    9014: 'Soccer',
    9015: 'Soccer',
    9016: 'Soccer',
    9017: 'Soccer',
    9018: 'Soccer',
    9019: 'Soccer',
    9100: 'Motosport',
    9101: 'Motosport',
    9153: 'Tennis',
    9156: 'Tennis',
    18977: 'eSports',
    18983: 'eSports',
    19138: 'eSports',
    9020: 'Cricket',
    9399: 'Basketball',
};

export const TAGS_OF_MARKETS_WITHOUT_DRAW_ODDS = [
    9001,
    9002,
    9003,
    9004,
    9005,
    9006,
    9008,
    9007,
    9100,
    9101,
    9153,
    9156,
    18977,
    18983,
    19138,
    9020,
    9399,
];

export const SPORTS_TAGS_MAP: SportsTagsMap = {
    Football: [9001, 9002],
    Baseball: [9003],
    Basketball: [9004, 9005, 9008, 9399],
    Hockey: [9006],
    Soccer: [9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019],
    UFC: [9007],
    Motosport: [9100, 9101],
    Tennis: [9153, 9156],
    eSports: [18977, 18983, 19138],
    Cricket: [9020],
};

export enum TAGS_FLAGS {
    NCAA_FOOTBALL = 9001,
    NFL = 9002,
    MLB = 9003,
    NBA = 9004,
    NCAA_BASKETBALL = 9005,
    NHL = 9006,
    UFC = 9007,
    WNBA = 9008,
    MLS = 9010,
    EPL = 9011,
    LIGUE_ONE = 9012,
    BUNDESLIGA = 9013,
    LA_LIGA = 9014,
    SERIE_A = 9015,
    UEFA_CL = 9016,
    UEFA_EL = 9017,
    J1_LEAGUE = 9019,
    FORMULA1 = 9100,
    MOTOGP = 9101,
    CSGO = 18977,
    DOTA2 = 18983,
    LOL = 19138,
    IPL = 9020,
    EUROLEAGUE = 9399,
}

export const ENETPULSE_SPORTS = [9153, 9156, 18977, 18983, 19138, 9399];

export const MLS_TAG = 9010;
export const FIFA_WC_TAG = 9018;

export const PERSON_COMPETITIONS = [9007, 9100, 9101, 9153, 9156];

export enum BetType {
    WINNER = 0,
    SPREAD = 10001,
    TOTAL = 10002,
    DOUBLE_CHANCE = 10003,
}

export const BetTypeNameMap: Record<BetType, string> = {
    [BetType.WINNER]: 'winner',
    [BetType.SPREAD]: 'spread',
    [BetType.TOTAL]: 'total',
    [BetType.DOUBLE_CHANCE]: 'double-chance',
};

export enum DoubleChanceMarketType {
    HOME_TEAM_NOT_TO_LOSE = 'HomeTeamNotToLose',
    NO_DRAW = 'NoDraw',
    AWAY_TEAM_NOT_TO_LOSE = 'AwayTeamNotToLose',
}

export const SCORING_MAP: SportsMap = {
    9001: 'points',
    9002: 'points',
    9003: 'points',
    9004: 'points',
    9005: 'points',
    9006: 'goals',
    9007: '',
    9008: 'points',
    9010: 'goals',
    9011: 'goals',
    9012: 'goals',
    9013: 'goals',
    9014: 'goals',
    9015: 'goals',
    9016: 'goals',
    9017: 'goals',
    9018: 'goals',
    9019: 'goals',
    9100: '',
    9101: '',
    9153: 'gems',
    9156: 'gems',
    18977: 'round',
    18983: 'round',
    19138: 'round',
    9020: 'points',
    9399: 'points',
};

export const MATCH_RESOLVE_MAP: SportsMap = {
    9001: 'overtime',
    9002: 'overtime',
    9003: 'overtime',
    9004: 'overtime',
    9005: 'overtime',
    9006: 'overtime',
    9007: '',
    9008: 'overtime',
    9010: 'regular',
    9011: 'regular',
    9012: 'regular',
    9013: 'regular',
    9014: 'regular',
    9015: 'regular',
    9016: 'regular',
    9017: 'regular',
    9018: 'regular',
    9019: 'regular',
    9100: '',
    9101: '',
    9153: '',
    9156: '',
    18977: '',
    18983: '',
    19138: '',
    9020: '',
    9399: 'overtime',
};

export const SPORT_PERIODS_MAP: SportsMap = {
    9001: 'quarter',
    9002: 'quarter',
    9003: 'inning',
    9004: 'quarter',
    9005: 'half',
    9006: 'period',
    9007: 'round',
    9008: 'quarter',
    9010: 'half',
    9011: 'half',
    9012: 'half',
    9013: 'half',
    9014: 'half',
    9015: 'half',
    9016: 'half',
    9017: 'half',
    9018: 'half',
    9019: 'half',
    9153: 'set',
    9156: 'set',
    18977: 'round',
    18983: 'round',
    19138: 'round',
    9020: 'inning',
    9399: 'quarter',
};
