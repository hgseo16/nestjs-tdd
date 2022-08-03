import { TestingModule, Test } from "@nestjs/testing"

import { BoardsService } from "./boards.service";
import { BoardsController } from "./boards.controller";
import { Board, BoardStatus } from './board.model'

describe('BoardsController', () => {
    // let boardsService: BoardsService;
    // let boardsController: BoardsController;

    // beforeEach(() => {
    //     boardsService = new BoardsService()
    //     boardsController = new BoardsController(boardsService)
    // })

    let boardsService: BoardsService
    let boardsController: BoardsController

    beforeEach(async () => {
        const module: TestingModule =  await Test.createTestingModule({
            providers: [BoardsService],
            controllers: [BoardsController]
        }).compile()

        boardsService = module.get<BoardsService>(BoardsService)
        boardsController = module.get<BoardsController>(BoardsController)
    })

    describe('@GET /', () => {
        describe('Unit Test', () => {
            it('returns Array<Board>', async () => {
                // const result = []
                // jest.spyOn(boardsService, 'getAllBoards').mockImplementation(() => result)

                expect(await boardsController.getAllBoard()).toBeInstanceOf(Array<Board>)
            })
        })
        describe('E2E Test', () => {
            it('should have an e2e test', () => {
                expect('e2e test').toBe('e2e test')
            })
        })
    })

    describe('@POST /', () => {
        it('takes "CreateBoardDto", returns "')
    })

    // describe('@GET /:id', () => {
        
    // })

    // describe('@DELETE /:id', () => {
        
    // })

    // describe('@Patch /:id/status', () => {
        
    // })

    

})