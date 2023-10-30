import { BetType } from 'enums/markets';
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
        priority: 110,
    },
    {
        id: 9017,
        label: 'UEFA Europa League',
        logo: ``,
        logoClass: 'icon-league league--uel',
        favourite: false,
        hidden: false,
        priority: 111,
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
        priority: 109,
    },
    // {
    //     id: 9445,
    //     label: 'Formula 1',
    //     logo: '/logos/leagueLogos/f1.png',
    //     logoClass: 'icon-league league--f1',
    //     favourite: false,
    //     hidden: false,
    //     priority: 701,
    // },
    // {
    //     id: 9497,
    //     label: 'MotoGP',
    //     logo: `/logos/leagueLogos/motogp.png`,
    //     logoClass: 'icon-league league--motogp',
    //     favourite: false,
    //     hidden: false,
    //     priority: 702,
    // },
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
        logoClass: 'icon-league league--csgo',
        favourite: false,
        hidden: false,
        priority: 801,
    },
    {
        id: 18983,
        label: 'DOTA 2',
        logoClass: 'icon-league league--dota2',
        favourite: false,
        hidden: false,
        priority: 802,
    },
    {
        id: 19138,
        label: 'LOL',
        logoClass: 'icon-league league--lol',
        favourite: false,
        hidden: false,
        priority: 803,
    },
    {
        id: 9020,
        label: 'Indian Premier League',
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
    {
        id: 18196,
        label: 'Boxing',
        logoClass: 'icon-league league--boxing',
        favourite: false,
        hidden: false,
        priority: 602,
    },
    {
        id: 9057,
        label: 'Eredivisie',
        logoClass: 'icon-league league--eredivisie',
        favourite: false,
        hidden: false,
        priority: 107,
    },
    {
        id: 9061,
        label: 'Primeira Liga',
        logoClass: 'icon-league league--portugal',
        favourite: false,
        hidden: false,
        priority: 108,
    },
    {
        id: 9045,
        label: 'Copa Libertadores',
        logoClass: 'icon-league league--copa-libertadores',
        favourite: false,
        hidden: false,
        priority: 112,
    },
    {
        id: 9033,
        label: 'IIHF World Championship',
        logoClass: 'icon-league league--iihf',
        favourite: false,
        hidden: false,
        priority: 502,
    },
    {
        id: 9296,
        label: 'FIFA World Cup U20',
        logoClass: 'icon-league league--fifa-world-cup-u20',
        favourite: false,
        hidden: false,
        priority: 121,
    },
    {
        id: 9021,
        label: 'T20 Blast',
        logoClass: 'icon-league league--t20',
        favourite: false,
        hidden: false,
        priority: 902,
    },
    {
        id: 9050,
        label: 'UEFA EURO Qualifications',
        logoClass: 'icon-league league--uefa',
        favourite: false,
        hidden: false,
        priority: 113,
    },
    {
        id: 109021,
        label: 'Golf head-to-head',
        logoClass: 'icon-league league--pga',
        favourite: false,
        hidden: false,
        priority: 1001,
    },
    {
        id: 109121,
        label: 'Golf Tournament Winner',
        logoClass: 'icon-league league--pga',
        favourite: false,
        hidden: false,
        priority: 1002,
    },
    {
        id: 18806,
        label: 'UEFA Nations League',
        logoClass: 'icon-league league--uefa-nations',
        favourite: false,
        hidden: false,
        priority: 114,
    },
    {
        id: 18821,
        label: 'CONCACAF Nations League',
        logoClass: 'icon-league league--concacaf-nations',
        favourite: false,
        hidden: false,
        priority: 115,
    },
    {
        id: 9288,
        label: 'UEFA EURO U21',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 120,
    },
    {
        id: 9042,
        label: 'UEFA Champions League Qualification',
        logoClass: 'icon-league league--ucl',
        favourite: false,
        hidden: false,
        priority: 111,
    },
    {
        id: 19216,
        label: 'UEFA Conference League',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 118,
    },
    {
        id: 9076,
        label: 'FIFA World Cup Women',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 119,
    },
    {
        id: 9073,
        label: 'UEFA Europa League',
        logoClass: 'icon-league league--uel',
        favourite: false,
        hidden: true,
        priority: 117,
    },
    {
        id: 9409,
        label: 'FIBA World Cup',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 303,
    },
    {
        id: 9536,
        label: 'Saudi Professional League',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 109,
    },
    {
        id: 9268,
        label: 'Serie A',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 109,
    },
    {
        id: 19199,
        label: 'CONMEBOL WC Qualification',
        logoClass: '',
        favourite: false,
        hidden: false,
        priority: 110,
    },
];

export const SPORTS_MAP: SportsMap = {
    9001: 'Football',
    9002: 'Football',
    9003: 'Baseball',
    9004: 'Basketball',
    9005: 'Basketball',
    9006: 'Hockey',
    9007: 'MMA',
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
    9445: 'Motosport',
    9497: 'Motosport',
    9153: 'Tennis',
    9156: 'Tennis',
    18977: 'eSports',
    18983: 'eSports',
    19138: 'eSports',
    9020: 'Cricket',
    9399: 'Basketball',
    18196: 'MMA',
    9057: 'Soccer',
    9061: 'Soccer',
    9045: 'Soccer',
    9033: 'Hockey',
    9296: 'Soccer',
    9021: 'Cricket',
    9050: 'Soccer',
    109021: 'Golf',
    109121: 'Golf',
    18806: 'Soccer',
    18821: 'Soccer',
    9288: 'Soccer',
    9042: 'Soccer',
    19216: 'Soccer',
    9076: 'Soccer',
    9073: 'Soccer',
    9409: 'Basketball',
    9536: 'Soccer',
    9268: 'Soccer',
    19199: 'Soccer',
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
    9445,
    9497,
    9153,
    9156,
    18977,
    18983,
    19138,
    9020,
    9399,
    18196,
    9021,
    109021,
    109121,
    9409,
];

export const SPORTS_TAGS_MAP: SportsTagsMap = {
    Football: [9001, 9002],
    Baseball: [9003],
    Basketball: [9004, 9005, 9008, 9399, 9409],
    Hockey: [9006, 9033],
    Soccer: [
        9010,
        9011,
        9012,
        9013,
        9014,
        9015,
        9016,
        9017,
        9018,
        9019,
        9057,
        9061,
        9045,
        9296,
        9050,
        18806,
        18821,
        9288,
        9042,
        19216,
        9076,
        9073,
        9536,
        9268,
        19199,
    ],
    MMA: [9007, 18196],
    Motosport: [9445, 9497],
    Tennis: [9153, 9156],
    eSports: [18977, 18983, 19138],
    Cricket: [9020, 9021],
    Golf: [109021, 109121],
};

export const ENETPULSE_SPORTS = [
    9153,
    9156,
    18977,
    18983,
    19138,
    9399,
    18196,
    9057,
    9061,
    9045,
    9445,
    9033,
    9296,
    9050,
    9497,
    18806,
    18821,
    9288,
    9042,
    19216,
    9076,
    9073,
    9409,
    9536,
    9268,
    19199,
];

export const JSON_ODDS_SPORTS = [109021, 109121];

export const FIFA_WC_TAG = 9018;
export const FIFA_WC_U20_TAG = 9296;
export const IIHF_WC_TAG = 9033;
export const UEFA_TAGS = [9016, 9017, 18806, 18821, 9288, 9042, 19216, 9076, 9073];
export const MOTOSPORT_TAGS = [9445, 9497];
export const GOLF_TAGS = [109021, 109121];
export const GOLF_TOURNAMENT_WINNER_TAG = 109121;
export const EUROPA_LEAGUE_TAGS = [9017, 9073];

export const BetTypeNameMap: Record<BetType, string> = {
    [BetType.WINNER]: 'winner',
    [BetType.SPREAD]: 'spread',
    [BetType.TOTAL]: 'total',
    [BetType.DOUBLE_CHANCE]: 'double-chance',
    [BetType.PLAYER_PROPS_STRIKEOUTS]: 'strikeouts',
    [BetType.PLAYER_PROPS_HOMERUNS]: 'home runs',
    [BetType.PLAYER_PROPS_PASSING_YARDS]: 'passing yards',
    [BetType.PLAYER_PROPS_PASSING_TOUCHDOWNS]: 'passing touchdowns',
    [BetType.PLAYER_PROPS_RUSHING_YARDS]: 'rushing yards',
    [BetType.PLAYER_PROPS_RECEIVING_YARDS]: 'receiving yards',
    [BetType.PLAYER_PROPS_TOUCHDOWNS]: 'scoring touchdown',
    [BetType.PLAYER_PROPS_FIELD_GOALS_MADE]: 'field goals made',
    [BetType.PLAYER_PROPS_PITCHER_HITS_ALLOWED]: 'pitcher hits allowed',
    [BetType.PLAYER_PROPS_POINTS]: 'points',
    [BetType.PLAYER_PROPS_SHOTS]: 'shots',
    [BetType.PLAYER_PROPS_GOALS]: 'goals',
    [BetType.PLAYER_PROPS_HITS_RECORDED]: 'hits recorded',
    [BetType.PLAYER_PROPS_REBOUNDS]: 'rebounds',
    [BetType.PLAYER_PROPS_ASSISTS]: 'assists',
    [BetType.PLAYER_PROPS_DOUBLE_DOUBLE]: 'double double',
    [BetType.PLAYER_PROPS_TRIPLE_DOUBLE]: 'triple double',
};

export const BetTypeTitleMap: Record<BetType, string> = {
    [BetType.PLAYER_PROPS_TOUCHDOWNS]: 'Who will score a touchdown in the game?',
    [BetType.PLAYER_PROPS_GOALS]: 'Who will score a goal in the game',
    [BetType.WINNER]: '',
    [BetType.SPREAD]: '',
    [BetType.TOTAL]: '',
    [BetType.DOUBLE_CHANCE]: '',
    [BetType.PLAYER_PROPS_HOMERUNS]: '',
    [BetType.PLAYER_PROPS_STRIKEOUTS]: '',
    [BetType.PLAYER_PROPS_PASSING_YARDS]: '',
    [BetType.PLAYER_PROPS_PASSING_TOUCHDOWNS]: '',
    [BetType.PLAYER_PROPS_RUSHING_YARDS]: '',
    [BetType.PLAYER_PROPS_RECEIVING_YARDS]: '',
    [BetType.PLAYER_PROPS_FIELD_GOALS_MADE]: '',
    [BetType.PLAYER_PROPS_PITCHER_HITS_ALLOWED]: '',
    [BetType.PLAYER_PROPS_POINTS]: '',
    [BetType.PLAYER_PROPS_SHOTS]: '',
    [BetType.PLAYER_PROPS_HITS_RECORDED]: '',
    [BetType.PLAYER_PROPS_REBOUNDS]: '',
    [BetType.PLAYER_PROPS_ASSISTS]: '',
    [BetType.PLAYER_PROPS_DOUBLE_DOUBLE]: '',
    [BetType.PLAYER_PROPS_TRIPLE_DOUBLE]: '',
};

export const SCORING_MAP: SportsMap = {
    9001: 'points',
    9002: 'points',
    9003: 'points',
    9004: 'points',
    9005: 'points',
    9006: 'goals',
    9007: 'rounds',
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
    9445: '',
    9497: '',
    9153: 'sets',
    9156: 'sets',
    18977: 'round',
    18983: 'round',
    19138: 'round',
    9020: 'points',
    9399: 'points',
    18196: 'rounds',
    9057: 'goals',
    9061: 'goals',
    9045: 'goals',
    9033: 'goals',
    9296: 'goals',
    9021: 'points',
    9050: 'goals',
    109021: '',
    109121: '',
    18806: 'goals',
    18821: 'goals',
    9288: 'goals',
    9042: 'goals',
    19216: 'goals',
    9076: 'goals',
    9073: 'goals',
    9409: 'points',
    9536: 'goals',
    9268: 'goals',
    19199: 'goals',
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
    9445: '',
    9497: '',
    9153: '',
    9156: '',
    18977: '',
    18983: '',
    19138: '',
    9020: '',
    9399: 'overtime',
    18196: '',
    9057: 'regular',
    9061: 'regular',
    9045: 'regular',
    9033: 'regular',
    9296: 'regular',
    9021: '',
    9050: 'regular',
    109021: '',
    109121: '',
    18806: 'regular',
    18821: 'regular',
    9288: 'regular',
    9042: 'regular',
    19216: 'regular',
    9076: 'regular',
    9073: 'regular',
    9409: 'overtime',
    9536: 'regular',
    9268: 'regular',
    19199: 'regular',
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
    18196: 'round',
    9057: 'half',
    9061: 'half',
    9045: 'half',
    9033: 'period',
    9296: 'half',
    9021: 'inning',
    9050: 'half',
    109021: '',
    109121: '',
    18806: 'half',
    18821: 'half',
    9288: 'half',
    9042: 'half',
    19216: 'half',
    9076: 'half',
    9073: 'half',
    9409: 'quarter',
    9536: 'half',
    9268: 'half',
    19199: 'half',
};
