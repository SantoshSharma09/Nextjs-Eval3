import React from "react";
import { Box, Text, Heading, Grid, Flex } from "@chakra-ui/react";
import { GrLanguage } from "react-icons/gr";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiGitRepoForked } from "react-icons/bi";

const Projects = ({ project }) => {
  return (
    <div style={{ backgroundColor: "teal", paddingRight: "30px" }}>
      <Box ml="20px">
        <Heading textAlign="center" color="blue">
          Projects
        </Heading>
        <Box>
          <Grid templateColumns="repeat(2,1fr)" gap="20px">
            {project.items.map((item) => (
              <Box
                key={item.id}
                mt="20px"
                backgroundColor="white"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <a href={item.svn_url}>
                  <Box ml="10px" p="2">
                    <Text>{item.name}</Text>
                    <Text color="gray.600" fontSize="sm">
                      {item.full_name}
                    </Text>
                    <Text>Score:{item.score}</Text>
                    <Flex direction="row" justifyContent="space-between">
                      <Box>
                        <Text gap="3px" alignItems="center" display="flex">
                          {" "}
                          <span>
                            <FcLikePlaceholder />
                          </span>{" "}
                          {item.watchers}
                        </Text>
                        <Text Text gap="3px" alignItems="center" display="flex">
                          <BiGitRepoForked /> {item.forks}
                        </Text>
                      </Box>
                      <Box>
                        <Text gap="3px" alignItems="center" display="flex">
                          <GrLanguage /> {item.language}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </a>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const re = await fetch(
    "https://api.github.com/search/repositories?q=user:SantoshSharma09+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let dat = await re.json();
  return {
    props: {
      project: dat,
    },
  };
}
