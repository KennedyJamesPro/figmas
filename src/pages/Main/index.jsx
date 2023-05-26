import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, Img, Input, Line, List, Text } from "components";

const MainPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-outfit items-center justify-start mx-auto pb-[63px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start md:px-5 w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[190px] overflow-auto w-[89%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[865px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_maskgroup.png')" }}
              >
                <div className="md:h-[1429px] h-[865px] relative w-full">
                  <Img
                    src="images/img_background5.png"
                    className="h-[865px] m-auto object-cover w-full"
                    alt="backgroundFive"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[111px] inset-x-[0] items-center justify-start mx-auto top-[2%] w-[82%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        src="images/img_legionuniverselightsmall.png"
                        className="md:flex-1 h-[43px] sm:h-auto md:mt-0 mt-2 object-cover w-[13%] md:w-full"
                        alt="legionuniversel"
                      />
                      <Text
                        className="font-semibold md:ml-[0] ml-[589px] md:mt-0 mt-[15px] text-center text-white_A700"
                        variant="body10"
                      >
                        Roadmap
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[50px] md:mt-0 mt-3.5 text-center text-white_A700"
                        variant="body10"
                      >
                        About
                      </Text>
                      <div className="bg-white_A700_16 border-[3px] border-solid border-teal_A400 flex md:flex-1 flex-row gap-[11px] items-center justify-start mb-1.5 md:ml-[0] ml-[41px] p-[7px] rounded-[22px] w-[7%] md:w-full">
                        <Img
                          src="images/img_buttonthailand.png"
                          className="h-[31px] md:h-auto object-cover w-8"
                          alt="buttonthailand"
                        />
                        <Img
                          src="images/img_group1000001319.svg"
                          className="h-[3px]"
                          alt="group1000001319"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[45px] items-center justify-end mb-1.5 ml-5 md:ml-[0] p-3 rounded-[5px]"
                        style={{
                          backgroundImage:
                            "url('images/img_group1000001301.svg')",
                        }}
                      >
                        <Text
                          className="font-semibold text-center text-white_A700"
                          variant="body10"
                        >
                          Connect Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-squadaone md:gap-[45px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[53px] items-start justify-start md:mt-0 mt-[58px]">
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <Text
                            className="font-staatliches leading-[110.00px] text-white_A700 w-full"
                            variant="body12"
                          >
                            <span className="md:text-5xl text-teal_A400 text-[114px] font-squadaone text-left font-normal">
                              Next
                            </span>
                            <span className="md:text-5xl text-white_A700 text-[114px] font-squadaone text-left font-normal">
                              -Generation Superheroes
                            </span>
                          </Text>
                          <Text
                            className="font-outfit leading-[31.00px] text-white_A700 w-[87%] sm:w-full"
                            variant="body7"
                          >
                            Five super-powered film franchises, one universe,
                            from a team that has worked on Avatar, Avengers, and
                            with Stan Lee. Get VIP privileges in films, video
                            games, and comic books with your Polygon Legion
                            Universe NFT
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-end justify-start w-[36%] md:w-full">
                          <Line className="bg-gradient  h-px rotate-[180deg] w-[84%]" />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[26px] sm:px-5 rounded-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1000001301.svg')",
                              }}
                            >
                              <div className="flex flex-row gap-6 items-center justify-center w-[84%] md:w-full">
                                <Text
                                  className="text-white_A700"
                                  variant="body4"
                                >
                                  Mint now
                                </Text>
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="h-3.5"
                                  alt="arrowright"
                                />
                              </div>
                            </div>
                            <Line className="bg-gradient  h-px w-[95%]" />
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_7cardfleetfoot1.png"
                        className="h-[552px] md:h-auto mb-[19px] object-cover rounded-[10px]"
                        alt="7cardfleetfootOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[41px] items-start justify-start md:ml-[0] ml-[135px] mt-[35px] w-full">
                <Img
                  src="images/img_group1000001394.svg"
                  className="h-3.5 ml-0.5 md:ml-[0]"
                  alt="group1000001394"
                />
                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat md:h-[344px] h-[421px] p-[38px] sm:px-5 relative rounded-[35px] w-1/5 md:w-full"
                    style={{ backgroundImage: "url('images/img_group41.svg')" }}
                  >
                    <div className="font-outfit h-[344px] m-auto w-[81%] sm:w-full">
                      <Img
                        src="images/img_20230321.png"
                        className="absolute h-[344px] inset-[0] justify-center m-auto object-cover w-[84%]"
                        alt="20230321"
                      />
                      <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[23px] sm:px-5 w-full">
                        <Text
                          className="font-medium leading-[29.00px] mb-1.5 mt-[60px] text-center text-white_A700 w-full"
                          variant="body8"
                        >
                          An Academy Award winner and award winning film
                          professionals who have worked on some of the highest
                          grossing films of all time
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="absolute font-squadaone inset-x-[0] leading-[71.00px] mx-auto text-center text-white_A700 top-1/4 w-[67%] sm:w-full"
                      as="h5"
                      variant="h5"
                    >
                      Experience matters
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[421px] items-end justify-end p-[17px] rounded-[35px] w-1/5 md:w-full"
                    style={{ backgroundImage: "url('images/img_group42.svg')" }}
                  >
                    <div className="flex flex-row gap-[78px] items-start justify-end mb-9 mt-[53px] w-[88%] md:w-full">
                      <Img
                        src="images/img_image36.png"
                        className="h-[298px] md:h-auto object-cover w-[33%]"
                        alt="imageThirtySix"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start mt-[5px]">
                        <Text
                          className="font-squadaone leading-[47.00px] text-white_A700 w-[70%] sm:w-full"
                          variant="body2"
                        >
                          Award Winners
                        </Text>
                        <Text
                          className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                          variant="body8"
                        >
                          Award Winning Management Team.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[421px] items-end justify-end p-[5px] rounded-[35px] w-1/5 md:w-full"
                    style={{ backgroundImage: "url('images/img_group42.svg')" }}
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end mb-[57px] mt-[70px] w-[94%] md:w-full">
                      <Img
                        src="images/img_image37.png"
                        className="h-[252px] md:h-auto sm:mt-0 mt-8 object-cover w-[55%] sm:w-full"
                        alt="imageThirtySeven"
                      />
                      <div className="flex flex-col gap-[21px] items-start justify-start sm:ml-[0] ml-[3px]">
                        <Text
                          className="font-squadaone leading-[45.00px] text-white_A700 w-[86%] sm:w-full"
                          variant="body2"
                        >
                          Game Experience
                        </Text>
                        <Text
                          className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                          variant="body8"
                        >
                          Spiderman, G.I. Joe, Tenchu and more.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[31px] grid md:grid-cols-1 grid-cols-2 w-2/5 md:w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[421px] items-center justify-end sm:ml-[0] p-[21px] sm:px-5 rounded-[35px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group42.svg')",
                      }}
                    >
                      <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start mb-[41px] mt-[54px] w-[97%] md:w-full">
                        <Img
                          src="images/img_image40.png"
                          className="h-[259px] md:h-auto sm:mt-0 mt-[25px] object-cover w-[58%] sm:w-full"
                          alt="imageForty"
                        />
                        <div className="flex flex-col gap-[21px] items-start justify-start">
                          <Text
                            className="font-squadaone leading-[45.00px] text-white_A700 w-full"
                            variant="body2"
                          >
                            Film Experience
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-[91%] sm:w-full"
                            variant="body8"
                          >
                            Avatar, Avengers, Superman, X-Men and more.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[421px] items-center justify-center sm:ml-[0] p-[29px] sm:px-5 rounded-[35px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group42.svg')",
                      }}
                    >
                      <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-between my-[47px] w-[99%] md:w-full">
                        <Img
                          src="images/img_image41.png"
                          className="h-[229px] md:h-auto sm:mt-0 mt-10 object-cover w-[229px]"
                          alt="imageFortyOne"
                        />
                        <div className="flex flex-col gap-[21px] items-start justify-start">
                          <Text
                            className="font-squadaone leading-[45.00px] text-white_A700"
                            variant="body2"
                          >
                            <>
                              Television
                              <br />
                              Experience
                            </>
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-[95%] sm:w-full"
                            variant="body8"
                          >
                            Grimm, Trauma, Pushing Daisies, iZombie and more
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="h-[2223px] md:h-[2296px] sm:h-[2461px] mt-[66px] relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                  style={{
                    backgroundImage:
                      "url('images/img_maskgroup_2192x1440.png')",
                  }}
                >
                  <div className="h-[2192px] md:h-[2230px] sm:h-[2395px] relative w-full">
                    <Img
                      src="images/img_20230321_2192x1440.png"
                      className="h-[2192px] m-auto object-cover w-full"
                      alt="20230321_One"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[104px] inset-x-[0] items-center justify-start mx-auto top-[6%] w-[82%]">
                      <div className="h-[778px] relative w-full">
                        <Img
                          src="images/img_poster1.png"
                          className="h-[778px] m-auto object-cover rounded-[20px] w-full"
                          alt="posterOne"
                        />
                        <div className="absolute bg-white_A700_19 border-4 border-solid border-teal_A400_01 flex flex-col h-max inset-[0] items-end justify-center m-auto p-8 sm:px-5 rounded-[50%] w-[90px]">
                          <Img
                            src="images/img_vector.svg"
                            className="h-6"
                            alt="vector"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-full">
                            <Text
                              className="bg-clip-text bg-gradient2  font-squadaone text-transparent"
                              as="h2"
                              variant="h2"
                            >
                              BONUS PACKS
                            </Text>
                            <Text
                              className="sm:flex-1 font-normal font-outfit leading-[28.00px] text-white_A700 w-[56%] sm:w-full"
                              variant="body10"
                            >
                              Qualify for the following Bonus Packs by
                              purchasing the Bonus Pack number of Legion
                              Universe Digital Trading Cards. A Bonus Pack gives
                              you additional physical bonuses (items mailed to
                              you) as well as potential opportunities to join
                              with us in the physical production and premiers of
                              the films.
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row md:gap-10 gap-[228px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-[38px] w-[81%]"
                            orientation="horizontal"
                          >
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-end p-[7px] rounded-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group22.svg')",
                              }}
                            >
                              <Img
                                src="images/img_image11.png"
                                className="h-[38px] md:h-auto mb-[3px] mt-[9px] object-cover w-[99%]"
                                alt="imageEleven"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-end p-[7px] rounded-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group22.svg')",
                              }}
                            >
                              <Img
                                src="images/img_image12.png"
                                className="h-[38px] md:h-auto mb-[3px] mt-[9px] object-cover w-[99%]"
                                alt="imageTwelve"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-end p-[7px] rounded-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group22.svg')",
                              }}
                            >
                              <Img
                                src="images/img_image13.png"
                                className="h-[38px] md:h-auto mb-[3px] mt-[9px] object-cover w-[99%]"
                                alt="imageThirteen"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-end p-[7px] rounded-[5px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group22.svg')",
                              }}
                            >
                              <Img
                                src="images/img_image14.png"
                                className="h-[38px] md:h-auto mb-[3px] mt-[9px] object-cover w-[99%]"
                                alt="imageFourteen"
                              />
                            </div>
                          </List>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[26px] w-[88%] md:w-full">
                            <Text className="text-white_A700" variant="body6">
                              Legion 5 Pack
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[169px] text-white_A700"
                              variant="body6"
                            >
                              Legion 25 Pack
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[158px] text-white_A700"
                              variant="body6"
                            >
                              Legion 50 Pack
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[156px] text-white_A700"
                              variant="body6"
                            >
                              Legion 100 Pack
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mt-[23px] w-full">
                            <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[71%] md:w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[88%] md:w-full">
                                <Text
                                  className="font-normal md:mt-0 mt-1 text-teal_A400_01"
                                  variant="body10"
                                >
                                  01
                                </Text>
                                <Text
                                  className="font-normal leading-[26.00px] md:ml-[0] ml-[13px] text-white_A700_66 w-[30%] sm:w-full"
                                  variant="body10"
                                >
                                  Receive the Premier Edition of the Legion
                                  Trading Card Game
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[52px] md:mt-0 mt-1 text-teal_A400_01"
                                  variant="body10"
                                >
                                  01
                                </Text>
                                <Text
                                  className="font-normal leading-[26.00px] md:ml-[0] ml-[13px] text-white_A700_66 w-1/5 sm:w-full"
                                  variant="body10"
                                >
                                  All items from previous pack
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] ml-[121px] md:mt-0 mt-1 text-teal_A400_01"
                                  variant="body10"
                                >
                                  01
                                </Text>
                                <Text
                                  className="font-normal leading-[26.00px] md:ml-[0] ml-[13px] text-white_A700_66 w-[16%] sm:w-full"
                                  variant="body10"
                                >
                                  All from previous Packs
                                </Text>
                              </div>
                              <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-full">
                                <div className="flex md:flex-1 flex-col gap-[13px] justify-start w-[65%] md:w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                    <Text
                                      className="font-normal sm:mt-0 mt-1 text-teal_A400_01"
                                      variant="body10"
                                    >
                                      02
                                    </Text>
                                    <Text
                                      className="sm:flex-1 font-normal leading-[26.00px] sm:ml-[0] ml-[9px] text-white_A700_66 w-2/5 sm:w-full"
                                      variant="body10"
                                    >
                                      Be entered in a pool to win the
                                      opportunity to be an extra in one of the
                                      films
                                    </Text>
                                    <Text
                                      className="font-normal sm:ml-[0] ml-[52px] sm:mt-0 mt-1 text-teal_A400_01"
                                      variant="body10"
                                    >
                                      02
                                    </Text>
                                    <Text
                                      className="sm:flex-1 font-normal leading-[26.00px] sm:ml-[0] ml-[9px] text-white_A700_66 w-2/5 sm:w-full"
                                      variant="body10"
                                    >
                                      Receive 5 Legion Concept Posters (1 for
                                      each Franchise) signed by Lee Baker the
                                      screenwriter
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[293px] w-[38%] md:w-full">
                                    <Text
                                      className="font-normal mt-1 text-teal_A400_01"
                                      variant="body10"
                                    >
                                      03
                                    </Text>
                                    <Text
                                      className="font-normal leading-[26.00px] text-white_A700_66 w-[86%] sm:w-full"
                                      variant="body10"
                                    >
                                      Receive 5 Legion T-shirts (1 for each
                                      Franchise)
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-1 flex-col gap-[13px] items-center justify-start w-[30%] md:w-full">
                                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                    <Text
                                      className="font-normal mt-1 text-teal_A400_01"
                                      variant="body10"
                                    >
                                      02
                                    </Text>
                                    <Text
                                      className="sm:flex-1 font-normal leading-[26.00px] text-white_A700_66 w-[89%] sm:w-full"
                                      variant="body10"
                                    >
                                      Receive an opportunity for a CAMEO ROLE in
                                      one of the films
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                    <Text
                                      className="font-normal mt-1 text-teal_A400_01"
                                      variant="body10"
                                    >
                                      03
                                    </Text>
                                    <Text
                                      className="sm:flex-1 font-normal leading-[26.00px] text-white_A700_66 w-[89%] sm:w-full"
                                      variant="body10"
                                    >
                                      Receive an invitation to attend a RED
                                      CARPET PREMIER SCREENING for one of the
                                      films
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:mt-0 mt-1 w-1/4 md:w-full">
                              <div className="flex flex-row gap-3.5 items-start justify-start w-[63%] md:w-full">
                                <Text
                                  className="font-normal text-teal_A400_01"
                                  variant="body10"
                                >
                                  01
                                </Text>
                                <Text
                                  className="font-normal text-white_A700_66"
                                  variant="body10"
                                >
                                  All from previous Packs
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2.5 items-start justify-start w-3/4 md:w-full">
                                <Text
                                  className="font-normal mt-1 text-teal_A400_01"
                                  variant="body10"
                                >
                                  02
                                </Text>
                                <Text
                                  className="font-normal leading-[26.00px] text-white_A700_66 w-[88%] sm:w-full"
                                  variant="body10"
                                >
                                  Receive a LEGION BITCOIN ORDINAL!
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                <Text
                                  className="font-normal mt-1 text-teal_A400_01"
                                  variant="body10"
                                >
                                  03
                                </Text>
                                <Text
                                  className="sm:flex-1 font-normal leading-[26.00px] text-white_A700_66 w-[91%] sm:w-full"
                                  variant="body10"
                                >
                                  Become a member of the LEGION ORDINALS ELITE
                                  INVESTMENT CLUB!
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-squadaone h-[506px] inset-x-[0] items-start justify-start mx-auto p-[57px] md:px-10 sm:px-5 rounded-[35px] w-[82%]"
                  style={{ backgroundImage: "url('images/img_group41.svg')" }}
                >
                  <div className="flex flex-col gap-[37px] items-start justify-start mb-[7px] md:ml-[0] ml-[3px] w-[91%] md:w-full">
                    <Text
                      className="leading-[74.00px] text-white_A700 w-full"
                      as="h6"
                      variant="h6"
                    >
                      <span className="md:text-[45px] sm:text-[39px] text-white_A700 text-[49px] font-squadaone text-left font-normal">
                        Seize this unparalleled opportunity to claim your very
                        own, exceptionally rare, limitededition treasure for 80
                        MATIC{" "}
                      </span>
                      <span className="md:text-[45px] sm:text-[39px] text-white_A700_66 text-[49px] font-squadaone text-left font-normal">
                        [$86 USD]
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start w-[86%] md:w-full">
                      <div className="flex flex-col font-squadaone gap-[19px] items-end justify-start w-[34%] md:w-full">
                        <Line className="bg-gradient  h-px rotate-[180deg] w-[84%]" />
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[26px] sm:px-5 rounded-[5px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group1000001301.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-6 items-center justify-center w-[84%] md:w-full">
                              <Text className="text-white_A700" variant="body4">
                                Mint now
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-3.5"
                                alt="arrowright_One"
                              />
                            </div>
                          </div>
                          <Line className="bg-gradient  h-px w-[95%]" />
                        </div>
                      </div>
                      <Input
                        wrapClassName="flex md:mt-0 my-5 w-[61%] md:w-full"
                        className="font-outfit font-semibold p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-xl w-full"
                        name="group1000001343"
                        placeholder="an offer that won&#39;t come knockingagain!"
                        prefix={
                          <Img
                            src="images/img_folder.svg"
                            className="mr-[27px] my-auto"
                            alt="folder"
                          />
                        }
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillWhiteA700"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-squadaone items-center justify-start md:ml-[0] ml-[135px] mt-12 w-[82%] md:w-full">
                <div className="flex sm:h-[1176px] h-[601px] justify-end relative w-full">
                  <div className="h-[443px] mt-auto mx-auto w-full">
                    <Img
                      src="images/img_shutterstock1901990632.png"
                      className="h-[443px] m-auto object-cover rounded-[20px] w-full"
                      alt="shutterstock190"
                    />
                    <div className="absolute bg-gradient3  h-[443px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                  </div>
                  <div className="absolute sm:h-[1176px] h-[601px] inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <Img
                          src="images/img_image3331.png"
                          className="h-[601px] md:h-auto object-cover rounded-[20px]"
                          alt="image3331"
                        />
                        <Img
                          src="images/img_image3031.png"
                          className="h-[575px] md:h-auto sm:mt-0 mt-[26px] object-cover rounded-[20px]"
                          alt="image3031"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-gradient4  bottom-[0] flex flex-col gap-[17px] inset-x-[0] items-center justify-start mx-auto p-1.5 w-full">
                      <div className="flex flex-col gap-[23px] items-center justify-start w-[68%] md:w-full">
                        <Text
                          className="text-center text-white_A700"
                          as="h4"
                          variant="h4"
                        >
                          <span className="md:text-5xl text-white_A700 text-[75px] font-squadaone font-normal">
                            Buy{" "}
                          </span>
                          <span className="md:text-5xl text-white_A700 text-[75px] font-squadaone font-normal">
                            50
                          </span>
                          <span className="md:text-5xl text-white_A700 text-[75px] font-squadaone font-normal">
                            {" "}
                            Digital Trading Cards
                          </span>
                        </Text>
                        <div className="font-outfit h-[88px] relative w-full">
                          <Text
                            className="leading-[44.00px] m-auto text-center text-white_A700 w-full"
                            variant="body5"
                          >
                            You are guaranteed to receive an opportunity for a
                            CAMEO ROLE in one of the films as well as an
                            invitation to one of the RED CARPET SCREENINGS!
                          </Text>
                          <div className="absolute bottom-[0] flex flex-col gap-[41px] justify-start right-[6%] w-[36%]">
                            <Line className="bg-teal_A400_01 h-[3px] md:ml-[0] ml-[55px] mr-[77px] w-[52%]" />
                            <Line className="bg-teal_A400_01 h-[3px] w-full" />
                          </div>
                        </div>
                      </div>
                      <div className="font-outfit md:h-[119px] h-[88px] mb-[31px] relative w-[82%] md:w-full">
                        <Text
                          className="leading-[44.00px] m-auto text-center text-white_A700 w-full"
                          variant="body5"
                        >
                          PLUS an in person dinner with producers, directors,
                          writers and VFX. PLUS with the investment club, access
                          to information, investments and funds that are not
                          available to the general public.
                        </Text>
                        <div className="absolute flex flex-row sm:gap-10 items-center justify-between left-[0] top-[45%] w-[79%]">
                          <Line className="bg-teal_A400_01 h-[3px] w-[8%]" />
                          <Line className="bg-teal_A400_01 h-[3px] w-[8%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-squadaone mt-[170px] overflow-x-auto w-full">
              <div className="md:h-[2713px] sm:h-[3380px] h-[3737px] overflow-auto relative w-full">
                <div className="absolute flex flex-col md:gap-10 gap-[758px] items-center justify-start right-[0] top-[1%] w-[89%] md:w-full">
                  <div className="h-[1078px] md:h-[1129px] relative w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_maskgroup_1078x1440.png')",
                      }}
                    >
                      <div className="h-[1078px] md:h-[1129px] relative w-full">
                        <Img
                          src="images/img_background7.png"
                          className="h-[1078px] m-auto object-cover w-full"
                          alt="backgroundSeven"
                        />
                        <div className="absolute flex flex-col h-max inset-y-[0] justify-start left-[10%] my-auto w-[74%]">
                          <Text
                            className="bg-clip-text bg-gradient5  mr-[99px] text-transparent"
                            variant="body9"
                          >
                            LEGION UNIVERSE
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  md:ml-[0] ml-[207px] text-transparent"
                            variant="body9"
                          >
                            DTC BENEFITS
                          </Text>
                          <div className="flex flex-col font-outfit items-center justify-start md:ml-[0] ml-[129px] mt-16 w-[88%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  src="images/img_volume.svg"
                                  className="h-[53px] mb-0.5 w-[53px]"
                                  alt="volume"
                                />
                                <Text
                                  className="sm:flex-1 font-medium leading-[25.00px] md:ml-[0] ml-[21px] md:mt-0 mt-[5px] text-white_A700 w-[15%] sm:w-full"
                                  variant="body8"
                                >
                                  VIP access to the film productions
                                </Text>
                                <Img
                                  src="images/img_file.svg"
                                  className="h-[53px] mb-0.5 md:ml-[0] ml-[141px] w-[53px]"
                                  alt="file"
                                />
                                <Text
                                  className="sm:flex-1 font-medium leading-[25.00px] md:ml-[0] ml-[30px] md:mt-0 mt-[5px] text-white_A700 w-[21%] sm:w-full"
                                  variant="body8"
                                >
                                  Opportunity to be first to own comic books
                                </Text>
                                <Img
                                  src="images/img_file_teal_a400_01.svg"
                                  className="h-[53px] mb-0.5 md:ml-[0] ml-[77px] w-[53px]"
                                  alt="file_One"
                                />
                                <Text
                                  className="sm:flex-1 font-medium leading-[25.00px] md:ml-[0] ml-[30px] md:mt-0 mt-[5px] text-white_A700 w-[16%] sm:w-full"
                                  variant="body8"
                                >
                                  VIP access to apps and video games
                                </Text>
                              </div>
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[77%] md:w-full">
                                <Img
                                  src="images/img_videocamera.svg"
                                  className="h-[53px] mb-0.5 w-[53px]"
                                  alt="videocamera"
                                />
                                <Text
                                  className="font-medium leading-[25.00px] md:ml-[0] ml-[21px] md:mt-0 mt-[5px] text-white_A700 w-[26%] sm:w-full"
                                  variant="body8"
                                >
                                  Participation in events and promotions
                                </Text>
                                <Img
                                  src="images/img_file_teal_a400_01_53x53.svg"
                                  className="h-[53px] mb-0.5 ml-24 md:ml-[0] w-[53px]"
                                  alt="file_Two"
                                />
                                <Text
                                  className="font-medium leading-[25.00px] md:ml-[0] ml-[30px] md:mt-0 mt-[5px] text-white_A700 w-2/5 sm:w-full"
                                  variant="body8"
                                >
                                  Participation in the Legion community and
                                  opportunity to vote
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle670.png"
                      className="absolute h-28 left-[0] object-cover rounded-[10px] top-[42%] w-[21%]"
                      alt="rectangle670"
                    />
                    <Img
                      src="images/img_rectangle671.png"
                      className="absolute h-28 object-cover right-[0] rounded-[10px] top-[26%] w-[22%]"
                      alt="rectangle671"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[1544px] items-center justify-start w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_maskgroup_1544x1440.png')",
                    }}
                  >
                    <div className="h-[1544px] relative w-full">
                      <Img
                        src="images/img_20230321_1544x1440.png"
                        className="h-[1544px] m-auto object-cover w-full"
                        alt="20230321_Two"
                      />
                      <div className="absolute bottom-[11%] flex md:flex-col flex-row gap-[59px] inset-x-[0] items-start justify-start mx-auto w-[82%]">
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-4 w-[37%] md:w-full">
                          <Text
                            className="bg-clip-text bg-gradient7  font-squadaone text-transparent"
                            as="h5"
                            variant="h5"
                          >
                            NFT COLLECTION
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[31.00px] mt-6 text-white_A700 w-[96%] sm:w-full"
                            variant="body8"
                          >
                            We created this collection to reward our community
                            and welcome the world to the Legion Universe.
                          </Text>
                          <div className="bg-black_900_01 flex flex-row font-outfit gap-[30px] items-center justify-evenly mt-[46px] p-[13px] rounded-[10px] w-full">
                            <Img
                              src="images/img_file_teal_a400_01.svg"
                              className="h-10 w-10"
                              alt="file_Three"
                            />
                            <Text
                              className="sm:flex-1 font-normal leading-[26.00px] mb-[5px] text-white_A700 w-[74%] sm:w-full"
                              variant="body10"
                            >
                              By purchasing a Legion Universe NFT you become a
                              member of the worldwide Legion Universe Community
                              and get VIP privileges.
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[425px] items-center justify-start p-7 sm:px-5 w-[59%] md:w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_group1000001458.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start mb-[51px] w-[99%] md:w-full">
                            <Text className="text-white_A700" variant="body2">
                              Details
                            </Text>
                            <div className="flex sm:flex-col flex-row font-outfit sm:gap-10 items-start justify-between mt-[21px] w-[93%] md:w-full">
                              <Text
                                className="font-normal sm:mt-0 mt-[3px] text-white_A700_66"
                                variant="body10"
                              >
                                Number of NFTs:
                              </Text>
                              <Text
                                className="font-normal leading-[25.00px] text-white_A700"
                                variant="body10"
                              >
                                10,000 Legion Universe NFTs and a collection of
                                100 Legion Ordinals
                              </Text>
                            </div>
                            <div className="flex flex-row font-outfit items-start justify-between mt-4 w-[72%] md:w-full">
                              <Text
                                className="font-normal text-white_A700_66"
                                variant="body10"
                              >
                                Blockchains:
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body10"
                              >
                                Polygon and Bitcoin Ordinals!
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row font-outfit gap-[47px] items-center justify-start mt-[18px] w-[62%] md:w-full">
                              <Text
                                className="font-normal text-white_A700_66"
                                variant="body10"
                              >
                                Price of Legion Universe NFTs:
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body10"
                              >
                                80 Polygon (MATIC)
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row font-outfit sm:gap-10 gap-[89px] items-center justify-start mt-3.5 w-[99%] md:w-full">
                              <Text
                                className="font-normal leading-[25.00px] mb-0.5 text-white_A700_66 w-[26%] sm:w-full"
                                variant="body10"
                              >
                                Price of Legion Posters Ordinals:
                              </Text>
                              <Text
                                className="font-normal leading-[25.00px] sm:mt-0 mt-0.5 text-white_A700 w-3/5 sm:w-full"
                                variant="body10"
                              >
                                0.2 Bitcoin (or FREE if you purchase 100 or more
                                Legion Universe NFTs
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row font-outfit sm:gap-10 items-start justify-between mt-[11px] w-full">
                              <Text
                                className="font-normal sm:mt-0 mt-1 text-white_A700_66"
                                variant="body10"
                              >
                                Marketplaces:
                              </Text>
                              <Text
                                className="font-normal leading-[25.00px] text-white_A700"
                                variant="body10"
                              >
                                Legion Universe NFTs will be on Opensea and
                                Legion Ordinals are on Gamma.io
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-5 items-center justify-between right-[0] w-full">
                  <Img
                    src="images/img_image29.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageTwentyNine"
                  />
                  <Img
                    src="images/img_image30.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirty"
                  />
                  <Img
                    src="images/img_image31.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirtyOne"
                  />
                  <Img
                    src="images/img_image32.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirtyTwo"
                  />
                  <Img
                    src="images/img_image33.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirtyThree"
                  />
                  <Img
                    src="images/img_image34.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirtyFour"
                  />
                  <Img
                    src="images/img_image35.png"
                    className="h-[424px] md:h-auto object-cover rounded-[10px]"
                    alt="imageThirtyFive"
                  />
                </div>
                <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-center justify-start my-auto right-[16%] w-[56%]">
                  <div className="sm:h-[371px] h-[372px] md:h-[613px] relative w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[30px] sm:px-5 rounded-[20px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group37.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-end my-0.5 w-[94%] md:w-full">
                        <div className="flex flex-col gap-8 items-start justify-start">
                          <Text
                            className="font-squadaone text-white_A700"
                            variant="body1"
                          >
                            Film Productions
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                            variant="body10"
                          >
                            You will have access to cast and crew interviews, be
                            able to see the day-to-day activities and even
                            participate in the creative aspects including outfit
                            of characters, designs of creatives and sets through
                            your ability to vote.
                          </Text>
                        </div>
                        <Img
                          src="images/img_setcopy1.png"
                          className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[52%] md:w-full"
                          alt="setcopyOne"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_location.svg"
                      className="absolute bottom-[0] h-[87px] left-[0] rounded-[7px]"
                      alt="location"
                    />
                  </div>
                  <div className="h-[372px] md:h-[524px] relative w-full">
                    <div className="absolute h-[372px] md:h-[524px] inset-[0] justify-center m-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between ml-[31px] my-auto w-[88%]">
                        <Img
                          src="images/img_comic1.png"
                          className="h-[307px] md:h-auto object-cover rounded-[10px]"
                          alt="comicOne"
                        />
                        <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[51px]">
                          <Text
                            className="font-squadaone text-white_A700"
                            variant="body1"
                          >
                            Comic Books
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                            variant="body10"
                          >
                            You will have access to early artwork and be able to
                            see the comic book production pipeline. You will
                            also have the opportunity to be among the first to
                            purchase each of the comic books.
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_rectangle722.svg"
                        className="absolute h-[372px] inset-[0] justify-center m-auto rounded-[20px]"
                        alt="rectangle722"
                      />
                    </div>
                    <Img
                      src="images/img_mobile.svg"
                      className="absolute h-[87px] right-[0] rounded-[7px] top-[0]"
                      alt="mobile"
                    />
                  </div>
                  <div className="h-[372px] md:h-[499px] relative w-full">
                    <div className="absolute h-[372px] md:h-[499px] inset-[0] justify-center m-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between ml-auto mr-[33px] my-auto w-[88%]">
                        <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-[66px]">
                          <Text
                            className="font-squadaone text-white_A700"
                            variant="body1"
                          >
                            Video Games
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                            variant="body10"
                          >
                            Get ready for battle! You will be part of the
                            creation and get VIP privileges inside the games.
                          </Text>
                        </div>
                        <Img
                          src="images/img_game1.png"
                          className="h-[307px] md:h-auto object-cover rounded-[10px]"
                          alt="gameOne"
                        />
                      </div>
                      <Img
                        src="images/img_group37.svg"
                        className="absolute h-[372px] inset-[0] justify-center m-auto rounded-[20px]"
                        alt="rectangle724"
                      />
                    </div>
                    <Img
                      src="images/img_location.svg"
                      className="absolute bottom-[0] h-[87px] left-[0] rounded-[7px]"
                      alt="location_One"
                    />
                  </div>
                  <div className="h-[372px] md:h-[499px] relative w-full">
                    <div className="absolute h-[372px] md:h-[499px] inset-[0] justify-center m-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between ml-[31px] my-auto w-[88%]">
                        <Img
                          src="images/img_premier1.png"
                          className="h-[307px] md:h-auto object-cover rounded-[10px]"
                          alt="premierOne"
                        />
                        <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-[67px]">
                          <Text
                            className="font-squadaone text-white_A700"
                            variant="body1"
                          >
                            Events & Promotions
                          </Text>
                          <Text
                            className="font-normal font-outfit leading-[25.00px] text-white_A700 w-full"
                            variant="body10"
                          >
                            You will have the opportunity to be involved in
                            events and promotions as well as early access to
                            merchandise.
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_rectangle722.svg"
                        className="absolute h-[372px] inset-[0] justify-center m-auto rounded-[20px]"
                        alt="rectangle726"
                      />
                    </div>
                    <Img
                      src="images/img_mobile.svg"
                      className="absolute h-[87px] right-[0] rounded-[7px] top-[0]"
                      alt="mobile_One"
                    />
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-start right-[4%] top-[0] w-[82%]">
                  <Img
                    src="images/img_rectangle717.png"
                    className="h-[87px] md:h-auto object-cover rounded-[11px]"
                    alt="rectangle717"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[87px] items-center justify-start md:ml-[0] ml-[99px] p-[11px] rounded-[11px] w-[15%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001455.svg')",
                    }}
                  >
                    <Img
                      src="images/img_image29_60x136.png"
                      className="h-[60px] md:h-auto mb-[5px] object-cover w-[83%]"
                      alt="imageTwentyNine_One"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[87px] items-center justify-start ml-5 md:ml-[0] p-[9px] rounded-[11px] w-[15%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001455.svg')",
                    }}
                  >
                    <Img
                      src="images/img_image30_64x144.png"
                      className="h-16 md:h-auto mb-[5px] object-cover w-[86%]"
                      alt="imageThirty_One"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[87px] items-center justify-start ml-5 md:ml-[0] p-[26px] sm:px-5 rounded-[11px] w-[15%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001455.svg')",
                    }}
                  >
                    <Img
                      src="images/img_bitbasellogo.png"
                      className="h-[34px] md:h-auto object-cover w-[92%]"
                      alt="bitbasellogo"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[87px] items-center justify-start ml-5 md:ml-[0] p-3 rounded-[11px] w-[15%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001455.svg')",
                    }}
                  >
                    <Img
                      src="images/img_glgcopy.png"
                      className="h-[62px] md:h-auto object-cover w-[67%]"
                      alt="glgcopy"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[87px] items-center justify-start ml-5 md:ml-[0] p-6 sm:px-5 rounded-[11px] w-[15%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001455.svg')",
                    }}
                  >
                    <Img
                      src="images/img_scmclogo1.png"
                      className="h-[39px] md:h-auto object-cover w-[97%]"
                      alt="scmclogoOne"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-outfit items-center justify-start md:ml-[0] ml-[190px] mt-28 w-[89%] md:w-full">
              <div className="flex flex-col relative w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[1210px] items-center justify-start mx-auto w-full"
                  style={{
                    backgroundImage:
                      "url('images/img_maskgroup_1210x1440.png')",
                  }}
                >
                  <div className="h-[1210px] md:h-[1746px] relative w-full">
                    <Img
                      src="images/img_background6.png"
                      className="h-[1210px] m-auto object-cover w-full"
                      alt="backgroundSix"
                    />
                    <div className="absolute flex md:flex-col flex-row gap-[30px] inset-x-[0] items-start justify-start mx-auto top-[9%] w-[82%]">
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-3 w-[62%] md:w-full">
                        <Text
                          className="bg-clip-text bg-gradient7  font-squadaone text-transparent"
                          as="h3"
                          variant="h3"
                        >
                          CREATION AND RARITY
                        </Text>
                        <Text
                          className="font-normal font-outfit leading-[26.00px] mt-[21px] text-white_A700 w-full"
                          variant="body10"
                        >
                          Thousands of concept images of characters in the five
                          initial film franchises were created by Artificial
                          Intelligence and enhanced and touched up by our
                          artists. The best were chosen to be part of the Legion
                          Universe collection. Rarity is extremely important to
                          us and we embedded rarity factors in many ways.
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between mt-9 w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-2/5 md:w-full">
                            <Img
                              src="images/img_image16.png"
                              className="h-[305px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                              alt="imageSixteen"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[57%] md:w-full">
                            <Img
                              src="images/img_image15.png"
                              className="h-[478px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                              alt="imageFifteen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[37%] md:w-full">
                        <div className="bg-black_900_01 flex flex-col items-center justify-end p-[15px] rounded-[10px] w-full">
                          <div className="flex flex-col gap-3 justify-start mt-[5px] w-[97%] md:w-full">
                            <div className="flex flex-row gap-4 items-center justify-start w-[37%] md:w-full">
                              <Button
                                className="flex h-[38px] items-center justify-center w-[38px]"
                                shape="icbRoundedBorder5"
                                size="smIcn"
                                variant="icbFillWhiteA70019"
                              >
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[15px]"
                                  alt="send"
                                />
                              </Button>
                              <Text className="text-white_A700" variant="body6">
                                In images
                              </Text>
                            </div>
                            <Text
                              className="font-normal leading-[26.00px] md:ml-[0] ml-[54px] text-white_A700 w-[86%] sm:w-full"
                              variant="body10"
                            >
                              Each character from each franchise has many
                              concept images that range from common to legendary
                              to rare.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                          <div className="flex flex-row gap-4 items-start justify-start w-[34%] md:w-full">
                            <Button
                              className="flex h-[38px] items-center justify-center w-[38px]"
                              shape="icbRoundedBorder5"
                              size="smIcn"
                              variant="icbFillWhiteA70019"
                            >
                              <Img
                                src="images/img_send.svg"
                                className="h-[15px]"
                                alt="send_One"
                              />
                            </Button>
                            <Text
                              className="mt-1 text-white_A700"
                              variant="body6"
                            >
                              In colors
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[26.00px] md:ml-[0] ml-[54px] mt-[13px] text-white_A700 w-[86%] sm:w-full"
                            variant="body10"
                          >
                            There are seven colors for the frames of the NFTs
                            and one without color. The most rare colors are Gold
                            and Silver.
                          </Text>
                          <div className="flex flex-row gap-4 items-end justify-start mt-11 w-[39%] md:w-full">
                            <Button
                              className="flex h-[38px] items-center justify-center w-[38px]"
                              shape="icbRoundedBorder5"
                              size="smIcn"
                              variant="icbFillWhiteA70019"
                            >
                              <Img
                                src="images/img_send.svg"
                                className="h-[15px]"
                                alt="send_Two"
                              />
                            </Button>
                            <Text
                              className="mb-1 mt-[7px] text-white_A700"
                              variant="body6"
                            >
                              In symbols
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[26.00px] md:ml-[0] ml-[54px] mt-3.5 text-white_A700 w-[86%] sm:w-full"
                            variant="body10"
                          >
                            There are twelve symbols on the top left corner of
                            each Legion Universe NFT. These symbols are ranked
                            according to rarity.
                          </Text>
                          <div className="flex flex-row gap-4 items-end justify-start mt-[43px] w-[39%] md:w-full">
                            <Button
                              className="flex h-[38px] items-center justify-center w-[38px]"
                              shape="icbRoundedBorder5"
                              size="smIcn"
                              variant="icbFillWhiteA70019"
                            >
                              <Img
                                src="images/img_send.svg"
                                className="h-[15px]"
                                alt="send_Three"
                              />
                            </Button>
                            <Text
                              className="mb-[3px] mt-2 text-white_A700"
                              variant="body6"
                            >
                              In symbols
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[26.00px] md:ml-[0] ml-[54px] mt-[15px] text-white_A700 w-[86%] sm:w-full"
                            variant="body10"
                          >
                            As a special bonus we created five ULTRA RARE Legion
                            Universe NFTs. These NFTs are GOLD editions of the
                            main characters of each franchise.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-squadaone h-[506px] items-start justify-start mt-[-253px] mx-auto p-[57px] md:px-10 sm:px-5 rounded-[35px] w-[82%] z-[1]"
                  style={{ backgroundImage: "url('images/img_group41.svg')" }}
                >
                  <div className="flex flex-col gap-[37px] items-start justify-start mb-[7px] md:ml-[0] ml-[3px] w-[77%] md:w-full">
                    <Text
                      className="leading-[74.00px] text-white_A700 w-[96%] sm:w-full"
                      as="h6"
                      variant="h6"
                    >
                      <span className="md:text-[45px] sm:text-[39px] text-white_A700 text-[49px] font-squadaone text-left font-normal">
                        This is your only chance to acquire this exclusivelegion
                        digital collectible for only 80 MATIC{" "}
                      </span>
                      <span className="md:text-[45px] sm:text-[39px] text-white_A700_66 text-[49px] font-squadaone text-left font-normal">
                        [~$86 USD]
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between w-full">
                      <div className="flex flex-col font-squadaone gap-[19px] items-end justify-start">
                        <Line className="bg-gradient  h-px rotate-[180deg] w-[84%]" />
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[26px] sm:px-5 rounded-[5px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group1000001301.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-6 items-center justify-center w-[84%] md:w-full">
                              <Text className="text-white_A700" variant="body4">
                                Mint now
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-3.5"
                                alt="arrowright_Two"
                              />
                            </div>
                          </div>
                          <Line className="bg-gradient  h-px w-[95%]" />
                        </div>
                      </div>
                      <Input
                        wrapClassName="flex md:flex-1 md:mt-0 my-5 md:w-full"
                        className="font-outfit font-semibold p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-xl w-full"
                        name="group1000001345"
                        placeholder="an offer that won&#39;t come knockingagain!"
                        prefix={
                          <Img
                            src="images/img_folder.svg"
                            className="mr-[27px] my-auto"
                            alt="folder"
                          />
                        }
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillWhiteA700"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-squadaone gap-[26px] items-center justify-start mt-[122px] w-[82%] md:w-full">
                <div className="md:h-[517px] h-[518px] relative w-[32%] md:w-full">
                  <Img
                    src="images/img_offer.svg"
                    className="absolute bottom-[0] h-7 left-[0] rounded-[7px]"
                    alt="offer"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[20px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1000001278.svg')",
                    }}
                  >
                    <div className="h-[517px] relative w-full">
                      <Img
                        src="images/img_maskgroup_517x372.png"
                        className="h-[517px] m-auto object-cover w-full"
                        alt="maskgroup"
                      />
                      <Text
                        className="absolute bg-clip-text bg-gradient8  h-max inset-[0] justify-center m-auto text-center text-transparent w-max"
                        as="h1"
                        variant="h1"
                      >
                        TEAM
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-outfit gap-[26px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[516px] h-[518px] relative w-full">
                    <div className="absolute flex md:h-[516px] h-[517px] inset-[0] justify-end m-auto w-full">
                      <div className="flex flex-col h-full items-start justify-start mb-[135px] mt-auto mx-auto w-[88%]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] w-[9px]"
                          alt="send"
                        />
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] mt-[31px] w-[9px]"
                          alt="send_One"
                        />
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-[67px] w-full">
                          <Img
                            src="images/img_send.svg"
                            className="h-[9px] mt-1.5 w-[9px]"
                            alt="send_Two"
                          />
                          <Text
                            className="sm:flex-1 leading-[21.00px] text-white_A700 w-[95%] sm:w-full"
                            variant="body11"
                          >
                            Video game credits: Advent Rising, G.I. Joe,
                            Monopoly, Stuart Little, & Pirates of the Caribbean.
                          </Text>
                        </div>
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] mt-6 w-[9px]"
                          alt="send_Three"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[20px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group13.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[49px] justify-start mb-[67px] w-[98%] md:w-full">
                          <div className="flex flex-row gap-5 items-start justify-start w-[74%] md:w-full">
                            <div className="flex flex-col h-[119px] items-center justify-start w-[119px]">
                              <Img
                                src="images/img_image25.png"
                                className="h-[119px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[119px]"
                                alt="imageTwentyFive"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-[42%]">
                              <Img
                                src="images/img_menu.svg"
                                className="h-[33px]"
                                alt="menu"
                              />
                              <Text
                                className="mt-4 text-white_A700"
                                variant="body6"
                              >
                                Lee Baker
                              </Text>
                              <Text
                                className="font-normal mt-[9px] text-white_A700_66"
                                variant="body10"
                              >
                                President/CEO
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px]">
                            <Text className="text-white_A700" variant="body11">
                              Former owner/president of Sandman Studios.
                            </Text>
                            <Text
                              className="leading-[21.00px] mt-5 text-white_A700 w-full"
                              variant="body11"
                            >
                              Film & TV Credits include Race to Witch Mountain,
                              Pushing Daisies, Grimm, Trauma, The Aquabats,
                              Raising Hope, A Gifted Man, The Closer, iZombie.
                            </Text>
                            <Text
                              className="leading-[21.00px] mt-[79px] text-white_A700 w-full"
                              variant="body11"
                            >
                              Team recipient of 10 Telly Awards, 2 Davey Awards,
                              2 W3 Awards, 15 Horizon Awards, 5 Communicator
                              Awards and 6 Interactive Media Awards.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_forward.svg"
                      className="absolute bottom-[0] h-7 left-[0] rounded-[7px]"
                      alt="forward"
                    />
                  </div>
                  <div className="md:h-[515px] h-[518px] relative w-full">
                    <div className="absolute flex md:h-[515px] h-[517px] inset-[0] justify-end m-auto w-full">
                      <div className="flex flex-col h-full items-center justify-start mb-[152px] ml-5 mt-auto w-[3%]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] w-[9px]"
                          alt="send"
                        />
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] mt-[115px] w-[9px]"
                          alt="send_One"
                        />
                        <Img
                          src="images/img_send.svg"
                          className="h-[9px] mt-8 w-[9px]"
                          alt="send_Two"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[20px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group13.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[46px] justify-start mb-[105px] w-[98%] md:w-full">
                          <div className="flex flex-row gap-5 items-start justify-start w-[83%] md:w-full">
                            <div className="flex flex-col h-[119px] items-center justify-start w-[119px]">
                              <Img
                                src="images/img_image24.png"
                                className="h-[119px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[119px]"
                                alt="imageTwentyFour"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-[49%]">
                              <Img
                                src="images/img_menu.svg"
                                className="h-[33px]"
                                alt="menu"
                              />
                              <Text
                                className="mt-4 text-white_A700"
                                variant="body6"
                              >
                                Jarom Sidwell
                              </Text>
                              <Text
                                className="font-normal mt-[9px] text-white_A700_66"
                                variant="body10"
                              >
                                Head of Production
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[19px]">
                            <Text
                              className="leading-[21.00px] text-white_A700 w-full"
                              variant="body11"
                            >
                              Career credits include work on Avatar, Man of
                              Steel, Avengers, The Adventures of TinTin, X-Men:
                              First Class, A-Team, Gulliver’s Travels,
                              Transformers, We Own the Night, The Hitcher, Texas
                              Chainsaw Massacre—The Beginning and Zoom.
                            </Text>
                            <Text className="text-white_A700" variant="body11">
                              Produced VFX commercials at Radium/Reel FX.
                            </Text>
                            <Text
                              className="leading-[21.00px] text-white_A700 w-full"
                              variant="body11"
                            >
                              Currently leading Advent FX teams and perfecting
                              use of Virtual and Augmented Reality.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_forward.svg"
                      className="absolute bottom-[0] h-7 left-[0] rounded-[7px]"
                      alt="forward"
                    />
                  </div>
                </List>
              </div>
              <div className="flex flex-col mt-[31px] relative w-full">
                <div className="font-squadaone mx-auto overflow-x-auto w-full">
                  <div className="md:h-[1494px] sm:h-[1751px] h-[3419px] overflow-auto relative w-full">
                    <div className="absolute h-[3318px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[1070px] h-[1581px] sm:h-[1751px] mb-[-511px] mx-auto w-full z-[1]">
                        <Img
                          src="images/img_ellipse88.png"
                          className="h-[1483px] mx-auto object-cover md:w-full"
                          alt="ellipseEightyEight"
                        />
                        <div className="absolute h-[1581px] sm:h-[2262px] inset-[0] justify-center m-auto w-full">
                          <Img
                            src="images/img_20230321_1581x1440.png"
                            className="h-[1581px] m-auto object-cover w-full"
                            alt="20230321_Four"
                          />
                          <div className="absolute bottom-[2%] flex flex-col gap-[33px] justify-start left-[10%] w-[70%]">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] w-[81%] md:w-full">
                              <div className="md:gap-10 gap-[389px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] w-[9px]"
                                  alt="send_Fourteen"
                                />
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] w-[9px]"
                                  alt="send_Fifteen"
                                />
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] w-[9px]"
                                  alt="send_Sixteen"
                                />
                              </div>
                              <Img
                                src="images/img_send.svg"
                                className="h-[9px] md:ml-[0] ml-[398px] mt-[54px] w-[9px]"
                                alt="send_Seventeen"
                              />
                              <Img
                                src="images/img_send.svg"
                                className="h-[9px] mt-[13px] w-[9px]"
                                alt="send_Eighteen"
                              />
                              <div className="flex flex-row items-center justify-between mt-[52px] w-[51%] md:w-full">
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] w-[9px]"
                                  alt="send_Nineteen"
                                />
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] w-[9px]"
                                  alt="send_Twenty"
                                />
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between w-full">
                              <div className="flex md:flex-1 flex-col md:gap-10 gap-[1093px] justify-start w-[35%] md:w-full">
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] md:ml-[0] ml-[15px] w-[9px]"
                                  alt="send_TwentyOne"
                                />
                                <Text
                                  className="bg-clip-text bg-gradient9  text-transparent uppercase"
                                  as="h1"
                                  variant="h1"
                                >
                                  Roadmap
                                </Text>
                              </div>
                              <div className="flex md:flex-1 flex-col font-outfit md:gap-10 gap-[1075px] justify-start md:mt-0 mt-[41px] w-3/5 md:w-full">
                                <Img
                                  src="images/img_send.svg"
                                  className="h-[9px] md:ml-[0] ml-[7px] w-[9px]"
                                  alt="send_TwentyTwo"
                                />
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                                    <Text
                                      className="font-squadaone text-white_A700 uppercase"
                                      variant="body7"
                                    >
                                      2015-2023
                                    </Text>
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] sm:mt-0 mt-0.5 w-[15px]"
                                      alt="send_TwentyThree"
                                    />
                                    <Text
                                      className="font-normal font-outfit sm:mt-0 mt-0.5 text-white_A700"
                                      variant="body10"
                                    >
                                      Development of feature films and
                                      screenplays for LEGION UNIVERSE
                                    </Text>
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[27px] w-[88%] md:w-full">
                                    <Text
                                      className="font-squadaone text-white_A700 uppercase"
                                      variant="body7"
                                    >
                                      2023
                                    </Text>
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] sm:ml-[0] ml-[63px] sm:mt-0 mt-0.5 w-[15px]"
                                      alt="send_TwentyFour"
                                    />
                                    <Text
                                      className="font-normal font-outfit sm:ml-[0] ml-[22px] sm:mt-0 mt-0.5 text-white_A700"
                                      variant="body10"
                                    >
                                      Launch NFT project to build Worldwide
                                      Legion Community
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-center justify-start md:ml-[0] ml-[103px] mt-[22px] w-[46%] md:w-full">
                                    <Img
                                      src="images/img_location_white_a700.svg"
                                      className="h-[7px] w-[7px]"
                                      alt="location_Eight"
                                    />
                                    <Text
                                      className="font-normal text-white_A700"
                                      variant="body10"
                                    >
                                      Start PHASE I of LEGION UNIVERSE
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-center justify-start md:ml-[0] ml-[103px] mt-[22px] w-[45%] md:w-full">
                                    <Img
                                      src="images/img_location_white_a700.svg"
                                      className="h-[7px] w-[7px]"
                                      alt="location_Nine"
                                    />
                                    <Text
                                      className="font-normal text-white_A700"
                                      variant="body10"
                                    >
                                      Create Legion Trading Card Game
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[2248px] mt-auto mx-auto w-full">
                        <div className="flex font-outfit md:h-[1041px] h-[1052px] justify-end mb-[-11px] mx-auto w-full z-[1]">
                          <Img
                            src="images/img_ellipse86_786x959.png"
                            className="h-[786px] mt-auto object-cover"
                            alt="ellipseEightySix_One"
                          />
                          <div className="absolute h-[1052px] inset-[0] justify-center m-auto w-full">
                            <Img
                              src="images/img_background7_1052x1440.png"
                              className="h-[1052px] m-auto object-cover w-full"
                              alt="backgroundSeven_One"
                            />
                            <div className="absolute bottom-[19%] flex flex-col gap-[29px] justify-start right-[22%] w-2/5">
                              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[103px] w-[82%] md:w-full">
                                <Img
                                  src="images/img_location_white_a700.svg"
                                  className="h-[7px] w-[7px]"
                                  alt="location_Two"
                                />
                                <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-start mt-[27px] w-full">
                                  <Img
                                    src="images/img_location_white_a700.svg"
                                    className="h-[7px] w-[7px]"
                                    alt="location_Three"
                                  />
                                  <Text
                                    className="font-normal text-white_A700"
                                    variant="body10"
                                  >
                                    Start production of SPEED OF LIGHT and
                                    POWERS OF THE PAST
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-start mt-[21px] w-[92%] md:w-full">
                                  <Img
                                    src="images/img_location_white_a700.svg"
                                    className="h-[7px] w-[7px]"
                                    alt="location_Four"
                                  />
                                  <Text
                                    className="font-normal text-white_A700"
                                    variant="body10"
                                  >
                                    Start LEGION EPIC and LEGION CHAMPIONS video
                                    games
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[33px] w-[95%] md:w-full">
                                  <Text
                                    className="font-squadaone text-white_A700 uppercase"
                                    variant="body7"
                                  >
                                    2024
                                  </Text>
                                  <Img
                                    src="images/img_send.svg"
                                    className="h-[15px] sm:ml-[0] ml-[63px] sm:mt-0 mt-0.5 w-[15px]"
                                    alt="send_Twelve"
                                  />
                                  <Text
                                    className="font-normal font-outfit sm:ml-[0] ml-[22px] sm:mt-0 mt-0.5 text-white_A700"
                                    variant="body10"
                                  >
                                    Launch LEGION EPIC and LEGION CHAMPIONS
                                    video games
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-center md:ml-[0] ml-[103px] mt-[21px] w-[68%] md:w-full">
                                  <Img
                                    src="images/img_location_white_a700.svg"
                                    className="h-[7px] w-[7px]"
                                    alt="location_Five"
                                  />
                                  <Text
                                    className="font-normal text-white_A700"
                                    variant="body10"
                                  >
                                    Release SPEED OF LIGHT and POWERS OF THE
                                    PAST
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-end md:ml-[0] ml-[103px] mt-[22px] w-[83%] md:w-full">
                                  <Img
                                    src="images/img_location_white_a700.svg"
                                    className="h-[7px] w-[7px]"
                                    alt="location_Six"
                                  />
                                  <Text
                                    className="font-normal text-white_A700"
                                    variant="body10"
                                  >
                                    Start production of LEGION, QUENTIN HOLLOW
                                    and DISCOVERY
                                  </Text>
                                </div>
                                <div className="flex flex-row items-start justify-start mt-6 w-[59%] md:w-full">
                                  <Text
                                    className="font-squadaone mt-1 text-white_A700 uppercase"
                                    variant="body7"
                                  >
                                    2024
                                  </Text>
                                  <Img
                                    src="images/img_send.svg"
                                    className="h-[15px] ml-[63px] mt-[7px] w-[15px]"
                                    alt="send_Thirteen"
                                  />
                                  <Text
                                    className="font-normal font-outfit leading-[28.00px] ml-[22px] text-white_A700 w-3/5 sm:w-full"
                                    variant="body10"
                                  >
                                    Release LEGION, QUENTIN and DISCOVERY
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[26px] items-center justify-start md:ml-[0] ml-[103px] mt-[17px] w-[48%] md:w-full">
                                  <Img
                                    src="images/img_location_white_a700.svg"
                                    className="h-[7px] w-[7px]"
                                    alt="location_Seven"
                                  />
                                  <Text
                                    className="font-normal text-white_A700"
                                    variant="body10"
                                  >
                                    Start PHASE II of LEGION UNIVERSE
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[1207px] md:h-[1494px] mt-auto mx-auto w-full">
                          <Img
                            src="images/img_ellipse86.png"
                            className="h-[1164px] ml-auto my-auto object-cover"
                            alt="ellipseEightySix"
                          />
                          <div className="absolute h-[1207px] md:h-[1494px] inset-[0] justify-center m-auto w-full">
                            <Img
                              src="images/img_20230321_1207x1440.png"
                              className="h-[1207px] m-auto object-cover w-full"
                              alt="20230321_Three"
                            />
                            <div className="absolute flex flex-col gap-[19px] items-start justify-start left-[10%] top-[13%] w-[76%]">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[77%] md:w-full">
                                <Text
                                  className="text-teal_A400_01 uppercase"
                                  variant="body3"
                                >
                                  01
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[370px] text-teal_A400_01 uppercase"
                                  variant="body3"
                                >
                                  02
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[361px] text-teal_A400_01 uppercase"
                                  variant="body3"
                                >
                                  03
                                </Text>
                              </div>
                              <div className="flex md:flex-col flex-row font-outfit md:gap-10 items-start justify-between w-full">
                                <div className="flex md:flex-1 flex-col items-start justify-start w-[30%] md:w-full">
                                  <Text
                                    className="font-normal font-outfit leading-[30.00px] text-white_A700 w-full"
                                    variant="body8"
                                  >
                                    <span className="text-white_A700 text-[17px] text-left">
                                      <>
                                        We have made this part very easy whether
                                        you have a crypto wallet or not. If you
                                        are new to this space, simply click
                                        &quot;
                                      </>
                                    </span>
                                    <span className="text-teal_A400_01 text-[17px] text-left">
                                      Mint
                                    </span>
                                    <span className="text-white_A700 text-[17px] text-left">
                                      <>&quot; and use a credit card.</>
                                    </span>
                                  </Text>
                                  <div className="flex flex-col font-squadaone gap-[19px] items-end justify-start mt-[100px] w-[85%] md:w-full">
                                    <Line className="bg-gradient  h-px rotate-[180deg] w-[84%]" />
                                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[85px] items-center justify-start p-[26px] sm:px-5 rounded-[5px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group1000001301.svg')",
                                        }}
                                      >
                                        <div className="flex flex-row gap-6 items-center justify-center w-[84%] md:w-full">
                                          <Text
                                            className="text-white_A700"
                                            variant="body4"
                                          >
                                            Mint now
                                          </Text>
                                          <Img
                                            src="images/img_arrowright.svg"
                                            className="h-3.5"
                                            alt="arrowright_Three"
                                          />
                                        </div>
                                      </div>
                                      <Line className="bg-gradient  h-px w-[95%]" />
                                    </div>
                                  </div>
                                  <Text
                                    className="bg-clip-text bg-gradient9  font-squadaone mt-[197px] text-transparent uppercase"
                                    as="h1"
                                    variant="h1"
                                  >
                                    FAQ
                                  </Text>
                                </div>
                                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[64%] md:w-full">
                                  <div className="flex md:flex-col flex-row gap-[49px] items-center justify-start w-[96%] md:w-full">
                                    <Text
                                      className="font-medium leading-[30.00px] text-white_A700 w-[53%] sm:w-full"
                                      variant="body8"
                                    >
                                      If you are familiar with crypto wallets
                                      and have Polygon (MATIC) in your wallet,
                                      simply click “Mint” to go to our minting
                                      page:
                                    </Text>
                                    <Text
                                      className="font-medium leading-[30.00px] text-white_A700 w-[41%] sm:w-full"
                                      variant="body8"
                                    >
                                      If you want to purchase with a credit
                                      card, click “Mint” to go to our minting
                                      page:
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] w-full">
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] md:mt-0 mt-2 w-[15px]"
                                      alt="send_Four"
                                    />
                                    <Text
                                      className="sm:flex-1 font-normal leading-[28.00px] md:ml-[0] ml-[22px] text-white_A700 w-[39%] sm:w-full"
                                      variant="body10"
                                    >
                                      Press “Connect” to connect your wallet
                                      (MetaMask or Wallet Connect)
                                    </Text>
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] md:ml-[0] ml-[92px] md:mt-0 mt-2 w-[15px]"
                                      alt="send_Five"
                                    />
                                    <Text
                                      className="sm:flex-1 font-normal leading-[28.00px] md:ml-[0] ml-[22px] text-white_A700 w-[38%] sm:w-full"
                                      variant="body10"
                                    >
                                      Choose the number of NFTs you would like
                                      to purchase with a credit card
                                    </Text>
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[92px] items-end justify-start mt-3 w-[94%] md:w-full">
                                    <div className="flex flex-col gap-[17px] items-start justify-start mb-[3px] w-[48%] sm:w-full">
                                      <div className="flex flex-row gap-[22px] items-start justify-start w-full">
                                        <Img
                                          src="images/img_send.svg"
                                          className="h-[15px] mt-2 w-[15px]"
                                          alt="send_Six"
                                        />
                                        <Text
                                          className="sm:flex-1 font-normal leading-[28.00px] text-white_A700 w-[88%] sm:w-full"
                                          variant="body10"
                                        >
                                          Choose the number of NFTs you would
                                          like to purchase
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[22px] items-start justify-start w-[38%] md:w-full">
                                        <Img
                                          src="images/img_send.svg"
                                          className="h-[15px] mt-0.5 w-[15px]"
                                          alt="send_Seven"
                                        />
                                        <Text
                                          className="font-normal text-white_A700"
                                          variant="body10"
                                        >
                                          <span className="text-white_A700 text-[15px] font-outfit text-left">
                                            Click “
                                          </span>
                                          <span className="text-teal_A400_01 text-[15px] font-outfit text-left">
                                            Mint
                                          </span>
                                          <span className="text-white_A700 text-[15px] font-outfit text-left">
                                            ”
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-3.5 items-start justify-start sm:mt-0 mt-1.5 w-[39%] sm:w-full">
                                      <div className="flex flex-row gap-[22px] items-start justify-start w-[87%] md:w-full">
                                        <Img
                                          src="images/img_send.svg"
                                          className="h-[15px] w-[15px]"
                                          alt="send_Eight"
                                        />
                                        <Text
                                          className="font-normal text-white_A700"
                                          variant="body10"
                                        >
                                          <span className="text-white_A700 text-[15px] font-outfit text-left">
                                            Click “
                                          </span>
                                          <span className="text-teal_A400_01 text-[15px] font-outfit text-left">
                                            Buy with credit card
                                          </span>
                                          <span className="text-white_A700 text-[15px] font-outfit text-left">
                                            ”
                                          </span>
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[22px] items-start justify-start w-full">
                                        <Img
                                          src="images/img_send.svg"
                                          className="h-[15px] mt-2 w-[15px]"
                                          alt="send_Nine"
                                        />
                                        <Text
                                          className="sm:flex-1 font-normal leading-[28.00px] text-white_A700 w-[86%] sm:w-full"
                                          variant="body10"
                                        >
                                          Connect with Crossmint and follow the
                                          instructions
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-[86%] md:w-full">
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] sm:mt-0 mt-[11px] w-[15px]"
                                      alt="send_Ten"
                                    />
                                    <Text
                                      className="font-normal sm:ml-[0] ml-[22px] sm:mt-0 mt-[9px] text-white_A700"
                                      variant="body10"
                                    >
                                      Confirm in your Wallet
                                    </Text>
                                    <Img
                                      src="images/img_send.svg"
                                      className="h-[15px] sm:ml-[0] ml-[213px] sm:mt-0 mt-2 w-[15px]"
                                      alt="send_Eleven"
                                    />
                                    <Text
                                      className="font-normal leading-[28.00px] sm:ml-[0] ml-[22px] text-white_A700 w-[27%] sm:w-full"
                                      variant="body10"
                                    >
                                      Purchase your NFT with your credit card
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-outfit items-start justify-start right-[0] top-[22%] w-full">
                      <div className="flex flex-col gap-[41px] items-start justify-start w-[83%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[90%] md:w-full">
                          <div className="h-px relative w-[84%] md:w-full">
                            <Line className="bg-white_A700_7f h-px m-auto w-full" />
                            <Line className="absolute bg-teal_A400_01 h-px inset-y-[0] left-[0] my-auto w-[17%]" />
                          </div>
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-3.5 ml-10 md:ml-[0]"
                            alt="arrowleft"
                          />
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-3.5 md:ml-[0] ml-[43px]"
                            alt="arrowright_Four"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-full">
                          <div
                            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[421px] items-center justify-end p-[61px] md:px-10 sm:px-5 rounded-[35px] w-[59%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group31.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[26px] items-start justify-start mb-[7px] mt-[50px]">
                              <Text
                                className="bg-clip-text bg-gradient9  font-squadaone ml-0.5 md:ml-[0] text-transparent"
                                as="h1"
                                variant="h1"
                              >
                                THE UNIVERSE
                              </Text>
                              <Text
                                className="font-normal font-outfit leading-[28.00px] text-white_A700 w-full"
                                variant="body10"
                              >
                                We have created a new Super-Powered Universe
                                with an initial 5 feature films. We plan to grow
                                and expand like the Marvel Universe and bring
                                this new Universe to theater screens, computer
                                screens, tablet screens and to your phone. Join
                                us as we create the films, video games, comic
                                books, novels, augmented reality, virtual
                                reality, NFTs and step into the metaverse!
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[421px] items-center justify-start p-14 md:px-10 sm:px-5 rounded-[35px] w-[59%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group31.svg')",
                            }}
                          >
                            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-[99%] md:w-full">
                              <Img
                                src="images/img_image20.png"
                                className="h-[309px] sm:h-auto object-cover rounded-[10px] w-[32%] md:w-full"
                                alt="imageTwenty"
                              />
                              <div className="flex flex-col gap-5 items-start justify-start">
                                <Text
                                  className="text-white_A700"
                                  variant="body6"
                                >
                                  Powers of the past
                                </Text>
                                <Text
                                  className="font-normal leading-[28.00px] text-white_A700 w-full"
                                  variant="body10"
                                >
                                  Bree Powers, a teenager, is struck by
                                  lightning and goes into a coma. Two days later
                                  she wakes in a hospital bed, but has been
                                  living the life of an ancient magic user’s
                                  apprentice for many years. Her connection to
                                  the apprentice brings magic back and dangers
                                  the world has not faced for over 4000 years.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col font-outfit h-[517px] items-center justify-start p-[18px] right-[9%] rounded-[20px] top-[0] w-[26%]"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[41px] items-end justify-start mb-[126px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-full">
                          <div className="flex flex-col h-[119px] items-center justify-start w-[119px]">
                            <Img
                              src="images/img_image21.png"
                              className="h-[119px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[119px]"
                              alt="imageTwentyOne"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[58%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-[33px]"
                              alt="menu"
                            />
                            <Text
                              className="mt-5 text-white_A700"
                              variant="body6"
                            >
                              Augustine Kim
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] text-white_A700_66 w-full"
                              variant="body10"
                            >
                              Business Development/Distribution
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[21.00px] text-white_A700 w-[95%] sm:w-full"
                          variant="body11"
                        >
                          Distribution of over 300 motion pictures and TV series
                          including Once Upon A Time in America, Never Say Never
                          Again, The Killing Fields, Night Game, Platoon,
                          Witness, Endless Love, Nightmare on Elm Street,
                          Beverly Hills Cop, Moon Walker, Cotton Club,
                          Apocalypse Now, LA Confidential, El Salvador, The
                          Fugitive and The Empire of the Sun, Wild Wild World
                          Animals, Samuel Goldwyn’s package, Hercules’s series,
                          The Six Million Dollar Man, Combat and more.
                        </Text>
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col font-outfit h-[517px] inset-x-[0] items-center justify-start mx-auto p-[18px] rounded-[20px] top-[0] w-[26%]"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[46px] justify-start mb-[66px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-start w-[77%] md:w-full">
                          <div className="flex flex-col h-[119px] items-center justify-start w-[119px]">
                            <Img
                              src="images/img_image22.png"
                              className="h-[119px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[119px]"
                              alt="imageTwentyTwo"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[45%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-[33px]"
                              alt="menu_One"
                            />
                            <Text
                              className="mt-[17px] text-white_A700"
                              variant="body6"
                            >
                              Keith Merrill
                            </Text>
                            <Text
                              className="font-normal mt-[9px] text-white_A700_66"
                              variant="body10"
                            >
                              President/CEO
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px]">
                          <Text
                            className="leading-[21.00px] text-white_A700 w-full"
                            variant="body11"
                          >
                            Academy Award Winner: Keith won the Academy Award
                            for his film The Greatest American Cowboy.
                          </Text>
                          <Text
                            className="leading-[21.00px] mt-[21px] text-white_A700 w-full"
                            variant="body11"
                          >
                            Directed over 20 feature films including
                            Windwalkers, Amazon, 12 Dogs of Christmas, Broken
                            Hill, Alamo: the Price of Freedom and many more…
                          </Text>
                          <Text
                            className="leading-[21.00px] mt-5 text-white_A700 w-full"
                            variant="body11"
                          >
                            Directed many television shows including The Wild
                            West, Mr. Krueger’s Christmas, The Magical World of
                            Disney and others…
                          </Text>
                          <Text
                            className="mt-[23px] text-white_A700"
                            variant="body11"
                          >
                            Published author and has written many novels.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col font-outfit h-[517px] items-center justify-start left-[10%] p-[18px] rounded-[20px] top-[0] w-[26%]"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[46px] justify-start mb-[43px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-start mr-[17px] w-[95%] md:w-full">
                          <div className="flex flex-col h-[119px] items-center justify-start w-[119px]">
                            <Img
                              src="images/img_image23.png"
                              className="h-[119px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[119px]"
                              alt="imageTwentyThree"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[55%]">
                            <Img
                              src="images/img_menu.svg"
                              className="h-[33px]"
                              alt="menu_Two"
                            />
                            <Text
                              className="mt-[17px] text-white_A700"
                              variant="body6"
                            >
                              Cameron Curriden
                            </Text>
                            <Text
                              className="font-normal mt-[9px] text-white_A700_66"
                              variant="body10"
                            >
                              Chief Financial Officer
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[19px]">
                          <Text
                            className="leading-[21.00px] text-white_A700 w-full"
                            variant="body11"
                          >
                            In 2020, Cameron was nominated for the Top 100
                            people in Finance and in 2021 he was listed as the
                            top 40 under 40 professionals in the US.
                          </Text>
                          <Text
                            className="leading-[21.00px] text-white_A700 w-full"
                            variant="body11"
                          >
                            He built a real estate company from scratch to
                            multimillion dollar valuation in 18 months.
                          </Text>
                          <Text className="text-white_A700" variant="body11">
                            Actively involved in over $6.5 Billion in
                            transactions.
                          </Text>
                          <Text
                            className="leading-[21.00px] text-white_A700 w-full"
                            variant="body11"
                          >
                            Founded and exited 3 companies and also has invested
                            in and has sat on the advisory boards for multiple
                            startup companies in the tech, entertainment and
                            digital securities space.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_cart.svg"
                  className="h-7 ml-auto mr-[134px] mt-[-NaNpx] rounded-[7px] z-[1]"
                  alt="cart"
                />
                <Img
                  src="images/img_cart.svg"
                  className="h-7 ml-auto mr-[532px] mt-[-NaNpx] rounded-[7px] z-[1]"
                  alt="cart_One"
                />
                <Img
                  src="images/img_cart.svg"
                  className="h-7 ml-[422px] mt-[-NaNpx] rounded-[7px] z-[1]"
                  alt="cart_Two"
                />
                <Text
                  className="bg-clip-text bg-gradient9  font-squadaone mb-[1670px] ml-[142px] mt-[-NaNpx] text-transparent uppercase z-[1]"
                  as="h1"
                  variant="h1"
                >
                  How to mint
                </Text>
                <Text
                  className="font-normal font-outfit ml-auto mr-[582px] mt-[-NaNpx] text-white_A700 z-[1]"
                  variant="body10"
                >
                  Create initial Comic Books
                </Text>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col font-mulish gap-[29px] mt-[-270.12px] mx-auto w-[81%] z-[1]"
                >
                  {[...Array(9)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[31px] items-start justify-start pb-0.5 pr-0.5 w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <Text className="text-white_A700" variant="body6">
                            Can I select which Legion Universe NFT I want?
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="h-3.5 w-3.5"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start mb-7 w-[61%] md:w-full">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {({ expanded }) => (
                                  <div className="flex flex-col items-center justify-between w-full">
                                    <Text
                                      className="font-normal leading-[26.00px] text-white_A700 w-full"
                                      variant="body10"
                                    >
                                      <>
                                        The Legion Universe NFTs are randomly
                                        generated and delivered, so you
                                        won&#39;t know which NFT you receive
                                        until the collection is revealed. The
                                        NFTs feature characters from the 5
                                        initial film franchises in the Legion
                                        Universe, each with its own rarity.
                                      </>
                                    </Text>
                                  </div>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white_A700 w-full" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-col font-outfit items-center justify-start mt-[149px] w-[82%] md:w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <Line className="bg-white_A700 h-px w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Img
                      src="images/img_legionuniverselightsmall.png"
                      className="sm:flex-1 h-[43px] md:h-auto object-cover w-[13%] sm:w-full"
                      alt="legionuniversel_One"
                    />
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[710px] text-white_A700"
                    >
                      <Text variant="body11">Terms & Conditions</Text>
                    </a>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[49px] text-white_A700"
                    >
                      <Text variant="body11">Privacy Policy</Text>
                    </a>
                    <Text
                      className="sm:ml-[0] ml-[49px] text-white_A700"
                      variant="body11"
                    >
                      Legal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
