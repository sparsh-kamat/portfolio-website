"use client";
import { Project, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HorizontalProjectCard } from "@/components/common/ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsperpage = 3;

  const totalpages = Math.ceil(projects.length / projectsperpage);

  const startindex = (currentPage - 1) * projectsperpage;
  const endindex = startindex + projectsperpage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //scroll to top as window has changed
    window.scrollTo({ top: 0 + 270, behavior: "smooth" }); // Adjust the offset as needed

    // Update the URL with the new page number
  };

  //generate page number for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalpages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {projects.length > 2 && (
        <p className="text-sm text-muted-foreground text-center">
          Showing {startindex + 1}-{Math.min(endindex, projects.length)} of{" "}
          {projects.length} projects
        </p>
      )}
      {projects.slice(startindex, endindex).map((project) => (
        <HorizontalProjectCard key={project.id} project={project} />
      ))}

      {projects.length > 2 && (
        <div className="w-full max-w-5xl mx-auto px-10 xl:px-0">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageChange(page as number)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(Math.min(totalpages, currentPage + 1))
                  }
                  className={
                    currentPage === totalpages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
